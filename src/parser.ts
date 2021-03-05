import { Scanner, Token } from "./scanner";
import { ast } from "./ast";
import { create } from "./util";
import { DiagnosticsManager, NoRange, Position } from "./diagnostics";

interface OpInfo {
  infix: ast.InfixOperator;
  precedence: number;
}

const infixOperators: Partial<Record<Token, OpInfo>> = {
  [Token.Plus]: { precedence: 1, infix: ast.InfixOperator.Addition },
  [Token.Minus]: { precedence: 1, infix: ast.InfixOperator.Subtraction },
  [Token.Equals]: { precedence: 0, infix: ast.InfixOperator.Equals },
  [Token.Unequals]: { precedence: 0, infix: ast.InfixOperator.Unequals },
  [Token.Div]: { precedence: 2, infix: ast.InfixOperator.Division },
  [Token.Mult]: { precedence: 2, infix: ast.InfixOperator.Multiplication },
};

const assignmentOperators: Partial<Record<Token, ast.AssignmentOperator>> = {
  [Token.Set]: ast.AssignmentOperator.Set,
  [Token.PlusEquals]: ast.AssignmentOperator.Increment,
  [Token.MinusEquals]: ast.AssignmentOperator.Decrement,
  [Token.DivEquals]: ast.AssignmentOperator.Divide,
  [Token.MultEquals]: ast.AssignmentOperator.Multiply,
  [Token.PercentEquals]: ast.AssignmentOperator.Modulo,
};

export class Parser {
  constructor(
    public scanner: Scanner,
    private diagnostics: DiagnosticsManager
  ) {}

  _token: Token;
  prevTokenEnd: number;

  token() {
    return this._token;
  }

  getStart(): Position {
    return this.scanner.diagStart();
  }

  getEnd(): Position {
    return this.scanner.diagEnd();
  }

  getPrevEnd(): Position {
    return this.scanner.getDiagPosition(this.prevTokenEnd);
  }

  nextToken(): Token {
    this.prevTokenEnd = this.scanner.tokenEnd();
    this._token = this.scanner.scan();
    return this.token();
  }

  expect(token: Token) {
    if (this.token() != token) {
      this.diagnostics.error(
        `expected ${Token[token]}, got ${Token[this.token()]}`,
        {
          start: this.getStart(),
          end: this.getEnd(),
        }
      );
    }
    this.nextToken();
  }

  parseProgram(): ast.Program {
    this.nextToken();

    const start = this.getStart();
    const declarations = new Array<ast.Declaration>();

    while (this.token() != Token.EndOfFile) {
      const dec = this.parseStatement(true);
      if (dec) {
        declarations.push(dec);
      }
    }

    return create(ast.Program, {
      declarations,
      range: {
        start,
        end: this.getEnd(),
      },
    });
  }

  parseFnDec(name: ast.Identifier): ast.FunctionDec | undefined {
    // Eat '("
    this.nextToken();
    const params = this.parseList(Token.RParen, () => this.parseFnParamDec());

    this.expect(Token.Arrow);
    let returns = this.token() != Token.LCurl ? this.parseType() : undefined;
    let body = this.token() == Token.LCurl ? this.parseScope() : undefined;

    return create(ast.FunctionDec, {
      range: {
        start: name.range.start,
        end: this.getPrevEnd(),
      },
      name,
      params,
      body,
      returns,
    });
  }

  parseScope(): ast.Scope {
    // eat '{'
    const start = this.getStart();
    this.nextToken();
    const statements = this.parseList(Token.RCurl, () =>
      this.parseStatement(false)
    );
    return create(ast.Scope, {
      statements,
      range: {
        start,
        end: this.getPrevEnd(),
      },
    });
  }

  parseStatement(onlyDeclarations: true): ast.Declaration | undefined;
  parseStatement(onlyDeclarations: false): ast.Statement | undefined;
  parseStatement(onlyDeclarations: boolean): ast.Statement | undefined {
    const token = this.token();

    if (!onlyDeclarations) {
      if (token == Token.Return) {
        return this.parseReturn();
      }

      if (token == Token.Mult || token == Token.LParen) {
        const left = this.parseExpr();
        return this.parseAssignmentStatement(left);
      }

      if (token == Token.If) {
        return this.parseIfStatement();
      }
    }

    if (token == Token.NewLine) {
      this.nextToken();
      return;
    }

    if (token == Token.Identifier) {
      const name = this.scanner.value;
      const start = this.getStart();

      const nameIdent = create(ast.Identifier, {
        name,
        range: {
          start,
          end: this.getEnd(),
        },
      });

      this.nextToken();

      if (
        this.token() == Token.Colon ||
        this.token() == Token.ImplicitDecAssign
      ) {
        return this.parseDec(nameIdent);
      }

      if (this.token() == Token.LParen) {
        const expr = this.parseUnaryExprIdent(name, start);

        if (!(expr instanceof ast.FunctionCallExpr)) {
          this.diagnostics.error(
            `Expected Function call expr, got ${expr.constructor.name}`,
            {
              start: expr.range.start,
              end: expr.range.end,
            }
          );
          return;
        }

        return create(ast.FunctionCallStmt, {
          range: {
            start: expr.range.start,
            end: expr.range.end,
          },
          fnCall: expr,
        });
      }

      let left: ast.Expr = create(ast.IdentifierExpr, {
        range: {
          start: nameIdent.range.start,
          end: nameIdent.range.end,
        },
        id: nameIdent,
      });

      left = this.parsePostfixExpr(left);

      return this.parseAssignmentStatement(left);
    }

    console.log(Token[this.token()], this.scanner.value, this.getStart());
    throw new Error("To be implemented");
  }

  parseIfStatement(): ast.IfStatement {
    const start = this.getStart();
    this.nextToken(); // eat "if"
    const condition = this.parseExpr();
    const scope = this.parseScope();
    return create(ast.IfStatement, {
      condition,
      scope,
      range: {
        start,
        end: condition.range.end,
      },
    });
  }

  parseAssignmentStatement(left: ast.Expr): ast.AssignmentStatement {
    let op = assignmentOperators[this.token()];
    if (!op) {
      this.diagnostics.error(
        `Expected assignment operator, got ${Token[this.token()]}`,
        {
          start: this.getStart(),
          end: this.getEnd(),
        }
      );
      op = ast.AssignmentOperator.Set;
    }
    this.nextToken();
    const right = this.parseExpr();
    return create(ast.AssignmentStatement, {
      range: {
        start: left.range.start,
        end: right.range.end,
      },
      right,
      left,
      op,
    });
  }

  parseReturn(): ast.ReturnStatement {
    const start = this.getStart();
    this.nextToken();
    const expr = this.parseExpr();
    return create(ast.ReturnStatement, {
      expr,
      range: {
        start,
        end: this.getEnd(),
      },
    });
  }

  parseDec(nameIdent: ast.Identifier): ast.Declaration | undefined {
    // eat ':'
    if (this.token() == Token.Colon) {
      this.nextToken();
      if (this.token() == Token.LParen) {
        return this.parseFnDec(nameIdent);
      }

      if (
        !(
          this.token() == Token.TypeIdentifier ||
          this.token() == Token.Reference
        )
      ) {
        this.diagnostics.error(`Expected Type`, {
          start: this.getStart(),
          end: this.getEnd(),
        });
        return;
      }
      const type = this.parseType();
      let init: ast.Expr | undefined;
      if (this.token() == Token.Set) {
        this.nextToken();
        init = this.parseExpr();
      }
      return create(ast.VarDec, {
        range: {
          start: nameIdent.range.start,
          end: this.getPrevEnd(),
        },
        type,
        init,
        left: nameIdent,
      });
    }

    if (this.token() == Token.ImplicitDecAssign) {
      this.nextToken();
      const init = this.parseExpr();

      return create(ast.VarDec, {
        range: {
          start: nameIdent.range.start,
          end: this.getPrevEnd(),
        },
        init,
        left: nameIdent,
      });
    }
  }

  parseFnParamDec(): ast.FnParamDec {
    const start = this.getStart();

    let isVariadic = false;
    if (this.token() == Token.Elipsis) {
      this.nextToken();
      isVariadic = true;
    }

    let ident: ast.Identifier;

    if (this.token() != Token.Identifier) {
      this.diagnostics.error(
        `Expected Identifier, got ${Token[this.token()]}`,
        {
          start: this.getStart(),
          end: this.getEnd(),
        }
      );
      this.nextToken();
      ident = create(ast.Identifier, {
        name: "???",
        range: NoRange,
      });
    } else {
      ident = create(ast.Identifier, {
        name: this.scanner.value,
        range: {
          start: this.getStart(),
          end: this.getEnd(),
        },
      });
      this.nextToken();
    }

    let type: ast.Type | undefined = undefined;

    if (this.token() == Token.Colon) {
      this.nextToken();
      type = this.parseType();
    }

    const param = create(ast.FnParamDec, {
      ellipsis: isVariadic,
      type,
      left: ident,
      range: {
        start,
        end: this.getPrevEnd(),
      },
    });

    if (this.token() == Token.ImplicitDecAssign) {
      if (type) {
        this.diagnostics.error(
          `Unexpected ':=' when type is already set. Did you mean '='?`,
          {
            start: this.getStart(),
            end: this.getEnd(),
          }
        );
      }
      this.nextToken();
    } else if (this.token() == Token.Set) {
      this.nextToken();
    } else {
      return param;
    }
    param.init = this.parseExpr();
    return param;
  }

  parseExpr(minprecedence: number = 0): ast.Expr {
    let expr = this.parseUnaryExpr();
    return this.parseExpr1(expr);
  }

  parseExpr1(expr: ast.Expr, minprecedence: number = 0): ast.Expr {
    while (true) {
      const op = infixOperators[this.token()];

      if (!op || op.precedence < minprecedence) {
        break;
      }

      this.nextToken();
      const right = this.parseExpr(op.precedence + 1);
      expr = create(ast.InfixExpr, {
        right,
        left: expr,
        operator: op.infix,
        range: {
          start: expr.range.start,
          end: right.range.end,
        },
      });
    }

    return expr;
  }

  parsePostfixExpr(prefix: ast.Expr): ast.Expr {
    while (true) {
      if (this.token() == Token.LParen) {
        this.nextToken();
        const params = this.parseList(Token.RParen, () => this.parseExpr());
        prefix = create(ast.FunctionCallExpr, {
          range: {
            start: prefix.range.start,
            end: this.getPrevEnd(),
          },
          params,
          fn: prefix,
        });
        continue;
      }

      if (this.token() == Token.LSquare) {
        this.nextToken();
        let params = this.parseList(Token.RSquare, () => this.parseExpr());
        if (params.length > 1) {
          params = [params[0]];
          this.diagnostics.error(
            `Array Access with multiple parameters not yet supported`,
            {
              start: prefix.range.start,
              end: this.getPrevEnd(),
            }
          );
        } else if (params.length == 0) {
          params = [
            create(ast.ErrorExpr, {
              range: NoRange,
            }),
          ];
          this.diagnostics.error(`Array Access requires at least 1 parameter`, {
            start: prefix.range.start,
            end: this.getPrevEnd(),
          });
        }

        prefix = create(ast.ArrayAccessExpr, {
          array: prefix,
          range: {
            start: prefix.range.start,
            end: this.getPrevEnd(),
          },
          property: params[0],
        });

        continue;
      }

      break;
    }

    return prefix;
  }

  parseUnaryExpr(): ast.Expr {
    const start = this.getStart();

    if (this.token() == Token.LParen) {
      this.nextToken();
      const expr = this.parseExpr();
      this.expect(Token.RParen);
      return expr;
    }

    if (this.token() == Token.LSquare) {
      this.nextToken();
      const entries = this.parseList(Token.RSquare, () => this.parseExpr());
      return create(ast.ArrayLiteralExpr, {
        entries,
        range: {
          start,
          end: this.getPrevEnd(),
        },
      });
    }

    if (this.token() == Token.Not) {
      this.nextToken();
      const expr = this.parseUnaryExpr();
      return create(ast.UnaryExpression, {
        range: {
          start,
          end: this.getPrevEnd(),
        },
        operator: ast.UnaryOperator.Not,
        expr,
      });
    }

    if (this.token() == Token.Reference) {
      this.nextToken();
      const expr = this.parseExpr();
      return create(ast.RefExpr, {
        range: {
          start,
          end: this.getPrevEnd(),
        },
        expr,
      });
    }

    if (this.token() == Token.Number) {
      const value = this.scanner.value;
      this.nextToken();
      return create(ast.Number, {
        value: +value,
        range: {
          start,
          end: this.getEnd(),
        },
      });
    }

    if (this.token() == Token.Identifier) {
      const name = this.scanner.value;
      this.nextToken();
      return this.parseUnaryExprIdent(name, start);
    }

    if (this.token() == Token.Mult) {
      this.nextToken();
      const expr = this.parseExpr();
      return create(ast.DerefExpr, {
        expr,
        range: {
          start,
          end: expr.range.end,
        },
      });
    }

    this.diagnostics.error(`Unexpected Token: ${Token[this.token()]}`, {
      start,
      end: this.getEnd(),
    });

    this.nextToken();
    return create(ast.ErrorExpr, {
      range: {
        start,
        end: this.getEnd(),
      },
    });
  }

  parseUnaryExprIdent(name: string, start: Position): ast.Expr {
    const id = create(ast.IdentifierExpr, {
      range: {
        start,
        end: this.getEnd(),
      },
      id: create(ast.Identifier, {
        range: {
          start,
          end: this.getEnd(),
        },
        name,
      }),
    });

    return this.parsePostfixExpr(id);
  }

  parseType(): ast.Type | undefined {
    if (this.token() == Token.Reference) {
      const start = this.getStart();
      this.nextToken();

      let t: ast.Type | undefined;

      if (this.token() == Token.LParen) {
        t = this.parseFnPointer();
      } else {
        t = this.parseType();
      }

      if (!t) {
        return;
      }
      return create(ast.RefType, {
        range: {
          start,
          end: this.getPrevEnd(),
        },
        type: t,
      });
    }

    if (this.token() == Token.TypeIdentifier) {
      const start = this.getStart();
      const name = this.scanner.value;
      let templateParams = new Array<ast.Type>();
      this.nextToken();
      if (this.token() == Token.LessThan) {
        this.nextToken();
        templateParams = this.parseList(Token.GreaterThan, () =>
          this.parseType()
        );
      }
      return create(ast.PlainType, {
        name,
        templateParams,
        range: {
          start,
          end: this.getPrevEnd(),
        },
      });
    }

    this.diagnostics.error(
      `Expected Identifier or Pointer, got ${Token[this.token()]}`,
      {
        start: this.getStart(),
        end: this.getEnd(),
      }
    );
  }

  parseList<T>(closeToken: Token, kind: () => T | undefined): Array<T> {
    const arr = new Array<T>();

    while (true) {
      if (this.token() == Token.NewLine) {
        this.nextToken();
        continue;
      }

      if (this.token() == closeToken) {
        this.nextToken();
        break;
      }

      const v = kind();
      if (v) {
        arr.push(v);
      }

      if (this.token() == closeToken) {
        this.nextToken();
        break;
      }

      if (this.token() != Token.Comma && this.token() != Token.NewLine) {
        this.diagnostics.error(`Unexpected ${Token[this.token()]}`, {
          start: this.getStart(),
          end: this.getEnd(),
        });
        this.nextToken();
        break;
      } else {
        this.nextToken();
      }
    }

    return arr;
  }

  parseFnPointer(): ast.FunctionPtrType | undefined {
    // Parameters
    const start = this.getStart();

    // Eat '("
    this.nextToken();
    const params = this.parseList(Token.RParen, () => this.parseFnParamDec());

    this.expect(Token.Arrow);
    let returns = this.parseType();
    if (!returns) {
      returns = create(ast.PlainType, {
        range: NoRange,
        name: "Void",
        templateParams: [],
      });
      this.diagnostics.error(
        `Must explicitly state function pointer returning Void`,
        {
          start: this.getPrevEnd(),
          end: this.getPrevEnd(),
        }
      );
    }

    return create(ast.FunctionPtrType, {
      range: {
        start,
        end: this.getPrevEnd(),
      },
      params,
      returns,
    });
  }
}
