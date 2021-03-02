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
      const dec = this.parseTopLevelStatement();
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

  parseTopLevelStatement(): ast.Declaration | undefined {
    if (this.token() == Token.Identifier) {
      return this.parseFnVarDec();
    }
    if (this.token() == Token.NewLine) {
      this.nextToken();
      return;
    }
    this.diagnostics.error(`Unexpected Token: ${Token[this.token()]}`, {
      start: this.getStart(),
      end: this.getEnd(),
    });
    this.nextToken();
  }

  parseFnVarDec(): ast.Declaration | undefined {
    const name = this.scanner.value;

    const nameIdent = create(ast.Identifier, {
      name,
      range: {
        start: this.getStart(),
        end: this.getEnd(),
      },
    });

    this.nextToken();
    this.expect(Token.Colon);
    if (this.token() == Token.LParen) {
      return this.parseFnDec(nameIdent);
    }
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
    this.expect(Token.NewLine);
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
    if (this.token() == Token.Return) {
      const ret = this.parseReturn();
      this.expect(Token.NewLine);
      return ret;
    }
    console.log(Token[this.token()]);
    throw new Error("To be implemented");
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
    } else if (this.token() == Token.Equals) {
      this.nextToken();
    } else {
      return param;
    }
    param.init = this.parseExpr();
    return param;
  }

  parseExpr(minprecedence: number = 0): ast.Expr {
    let expr = this.parseUnaryExpr();
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

  parseUnaryExpr(): ast.Expr {
    const start = this.getStart();

    if (this.token() == Token.LParen) {
      this.nextToken();
      const expr = this.parseExpr();
      this.expect(Token.RParen);
      return expr;
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

    this.nextToken();
    return new ast.ErrorExpr();
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

    if (this.token() == Token.Identifier) {
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

    if (this.token() == closeToken) {
      this.nextToken();
      return arr;
    }

    while (true) {
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
