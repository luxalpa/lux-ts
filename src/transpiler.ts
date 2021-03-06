import { ast } from "./ast";
import * as ESTree from "estree";
import * as types from "./typenodes";
import { getFromTypemap } from "./util";

export interface TranspilerImport {
  fn: string;
  lib: string;
  simple: boolean;
}

export interface TranspilerOptions {
  generateMainStmt: boolean;
}

const defaultOptions: TranspilerOptions = {
  generateMainStmt: true,
};

export class Transpiler {
  constructor(private typemap: Map<ast.Node, types.TypeNode>) {}

  private handleDefaultOptions(
    options: Partial<TranspilerOptions>
  ): TranspilerOptions {
    let option: keyof TranspilerOptions;
    for (option in defaultOptions) {
      if (!defaultOptions.hasOwnProperty(option)) {
        continue;
      }

      if (options[option] === undefined) {
        options[option] = defaultOptions[option];
      }
    }

    return options as TranspilerOptions;
  }

  transpileExpr(node: ast.Expr): ESTree.Expression {
    return this.visit(node);
  }

  // TODO: Make static
  transpileProgram(
    program: ast.Program,
    imports: Map<ast.Declaration, TranspilerImport | undefined>,
    options: Partial<TranspilerOptions> = defaultOptions
  ): ESTree.Program {
    const alloptions = this.handleDefaultOptions(options);

    let stmts: ESTree.Statement[] = [];
    let structConstrStmts: ESTree.Statement[] = [];

    for (const declaration of program.declarations) {
      if (imports.has(declaration)) {
        continue;
      }

      if (declaration instanceof ast.StructDec) {
        // These are being done separately
        structConstrStmts.push(this.makeStruct(declaration));
        continue;
      }

      if (
        declaration instanceof ast.AliasDec ||
        declaration instanceof ast.Trait
      ) {
        continue;
      }

      if (declaration instanceof ast.FunctionDec && !declaration.body) {
        // TODO: Linkage to actual libraries
        continue;
      }

      let s = this.visit(declaration);
      if (Array.isArray(s)) {
        for (let x of s) {
          stmts.push(x);
        }
      } else {
        stmts.push(s);
      }
    }

    stmts.unshift(...structConstrStmts);
    stmts.unshift(
      ...[...imports.values()]
        .filter((v) => v)
        .map((value) => this.makeImport(value!))
    );

    stmts.push(generateIterateFn());

    if (alloptions.generateMainStmt) {
      stmts.push(generateMainFnCall());
    }

    return {
      type: "Program",
      sourceType: "script",
      body: stmts,
    };
  }

  visit(n?: ast.Node) {
    if (!n) {
      throw new Error("visit: Node is undefined");
    }
    if (n.constructor.name == "Object") {
      throw new Error(`Object without type: (${JSON.stringify(n)})`);
    }
    let fn = this[("visit" + n.constructor.name) as keyof Transpiler] as (
      e: ast.Node
    ) => any;
    if (!fn) {
      throw new Error(`Transpiler: ${n.constructor.name} is unimplemented!`);
    }
    return fn.call(this, n);
  }

  makeImport(imp: TranspilerImport): ESTree.Statement {
    if (imp.simple) {
      return {
        type: "VariableDeclaration",
        declarations: [
          {
            type: "VariableDeclarator",
            id: {
              type: "Identifier",
              name: imp.fn,
            },
            init: {
              type: "CallExpression",
              callee: {
                type: "Identifier",
                name: "require",
              },
              arguments: [
                {
                  type: "Literal",
                  value: imp.lib,
                },
              ],
              optional: false,
            },
          },
        ],
        kind: "const",
      };
    }

    return {
      type: "VariableDeclaration",
      declarations: [
        {
          type: "VariableDeclarator",
          id: {
            type: "ObjectPattern",
            properties: [
              {
                type: "Property",
                method: false,
                shorthand: true,
                computed: false,
                key: {
                  type: "Identifier",
                  name: imp.fn,
                },
                kind: "init",
                value: {
                  type: "Identifier",
                  name: imp.fn,
                },
              },
            ],
          },
          init: {
            type: "CallExpression",
            callee: {
              type: "Identifier",
              name: "require",
            },
            arguments: [
              {
                type: "Literal",
                value: imp.lib,
              },
            ],
            optional: false,
          },
        },
      ],
      kind: "const",
    };
  }

  makeStruct(struct: ast.StructDec): ESTree.FunctionDeclaration {
    return {
      type: "FunctionDeclaration",
      id: {
        type: "Identifier",
        name: struct.name.name,
      },
      body: {
        type: "BlockStatement",
        body: struct.declarations.map((d) => ({
          type: "ExpressionStatement",
          expression: {
            type: "AssignmentExpression",
            operator: "=",
            left: {
              type: "MemberExpression",
              computed: false,
              optional: false,
              object: {
                type: "ThisExpression",
              },
              property: {
                type: "Identifier",
                name: d.left.name,
              },
            },
            right: {
              type: "Identifier",
              name: d.left.name,
            },
          },
        })),
      },
      params: struct.declarations.map((d) => ({
        type: "Identifier",
        name: d.left.name,
      })),
    };
  }

  uniqueFunctionName(t: types.Function, suggestedName: string = ""): string {
    if (suggestedName === "") {
      suggestedName = suggestFunctionName(t);
    }
    // TODO: This disambiguates functions for traits, but is currently not correct (since it splits generics)
    // const cached = this.functionNameMap.get(t);
    // if (cached) {
    //   console.log("Function found!", t, cached);
    //   return cached;
    // }

    // console.log("Function not defined :/", t);
    // const originalSuggestedName = suggestedName;
    //
    // let i = 1;
    // while (this.functionNamesUsed.has(suggestedName)) {
    //   suggestedName = `${originalSuggestedName}_${i}`;
    //   i++;
    // }
    //
    // this.functionNamesUsed.add(suggestedName);
    // this.functionNameMap.set(t, suggestedName);
    return suggestedName;
  }

  visitVarDec(e: ast.VarDec): ESTree.VariableDeclaration {
    return {
      declarations: [
        {
          type: "VariableDeclarator",
          id: {
            type: "Identifier",
            name: e.left.name,
          },
          init: e.init && this.visit(e.init),
        },
      ],
      kind: "let",
      type: "VariableDeclaration",
    };
  }

  visitFunctionDec(
    e: ast.FunctionDec
  ): ESTree.FunctionDeclaration | ESTree.AssignmentExpression {
    const fn = getFromTypemap<types.Function>(this.typemap, e);
    const name = this.uniqueFunctionName(fn);

    let params: ESTree.Pattern[] = e.params.map((param) => {
      if (param.init) {
        return {
          type: "AssignmentPattern",
          left: {
            type: "Identifier",
            name: param.left.name,
          },
          right: this.visit(param.init),
        };
      }

      if (param.ellipsis) {
        return {
          type: "RestElement",
          argument: {
            type: "Identifier",
            name: param.left.name,
          },
        };
      }

      return {
        type: "Identifier",
        name: param.left.name,
      };
    });
    if (fn.belongsTo) {
      if (!(fn.belongsTo instanceof types.Struct)) {
        throw new Error(
          "Methods on non-structs not yet supported in transpiler"
        );
      }

      return {
        type: "AssignmentExpression",
        left: {
          type: "MemberExpression",
          computed: false,
          optional: false,
          object: {
            optional: false,
            type: "MemberExpression",
            computed: false,
            object: {
              type: "Identifier",
              name: jsStructName(fn.belongsTo),
            },
            property: {
              type: "Identifier",
              name: "prototype",
            },
          },
          property: {
            type: "Identifier",
            name: fnNameFromTrait(fn, fn.trait),
          },
        },
        operator: "=",
        right: {
          type: "FunctionExpression",
          params,
          body: this.visit(e.body),
        },
      };
    }

    return {
      type: "FunctionDeclaration",
      id: {
        type: "Identifier",
        name,
      },
      body: this.visit(e.body),
      params,
    };
  }

  visitScope(e: ast.Scope): ESTree.BlockStatement {
    return {
      type: "BlockStatement",
      body: e.statements.map((statement) => this.visit(statement)),
    };
  }

  visitInfixExpr(e: ast.InfixExpr): ESTree.BinaryExpression {
    let op: ESTree.BinaryOperator;
    switch (e.operator) {
      case ast.InfixOperator.Equals:
        op = "==";
        break;
      default:
        op = e.operator;
        break;
    }

    return {
      operator: op,
      left: this.visit(e.left),
      right: this.visit(e.right),
      type: "BinaryExpression",
    };
  }

  visitNumber(e: ast.Number): ESTree.SimpleLiteral {
    return {
      type: "Literal",
      value: e.value,
    };
  }

  visitString(s: ast.String): ESTree.SimpleLiteral {
    return {
      type: "Literal",
      value: s.str,
    };
  }

  visitIdentifierExpr(e: ast.IdentifierExpr): ESTree.Identifier {
    const fn = getFromTypemap(this.typemap, e);
    if (fn instanceof types.Function) {
      return {
        type: "Identifier",
        name: this.uniqueFunctionName(fn),
      };
    }
    return this.visit(e.id);
  }

  visitRefExpr(e: ast.RefExpr): ESTree.Expression {
    const t = getFromTypemap(this.typemap, e.expr);

    if (t instanceof types.Struct || t instanceof types.Function) {
      return this.visit(e.expr);
    }

    const ptrExpr = this.visit(e.expr);

    return {
      type: "ArrowFunctionExpression",
      expression: true,
      body: {
        type: "ConditionalExpression",
        test: {
          type: "BinaryExpression",
          operator: "!==",
          left: {
            type: "Identifier",
            name: "__p",
          },
          right: {
            type: "Identifier",
            name: "undefined",
          },
        },
        consequent: {
          type: "AssignmentExpression",
          left: ptrExpr,
          right: {
            type: "Identifier",
            name: "__p",
          },
          operator: "=",
        },
        alternate: ptrExpr,
      },
      params: [
        {
          type: "Identifier",
          name: "__p",
        },
      ],
    };
  }

  visitDerefExpr(e: ast.DerefExpr): ESTree.Expression {
    const t = getFromTypemap(this.typemap, e);
    if (t instanceof types.Struct) {
      return this.visit(e.expr);
    }

    return {
      type: "CallExpression",
      callee: this.visit(e.expr),
      arguments: [],
      optional: false,
    };
  }

  visitFunctionCallExpr(e: ast.FunctionCallExpr): ESTree.SimpleCallExpression {
    if (e.fn instanceof ast.MemberExpr) {
      const fnType = getFromTypemap<types.Function>(this.typemap, e.fn);

      return {
        type: "CallExpression",
        optional: false,
        callee: {
          type: "MemberExpression",
          computed: false,
          optional: false,
          object: this.visit(e.fn.object),
          property: {
            type: "Identifier",
            name: this.uniqueFunctionName(fnType),
          },
        },
        arguments: [...e.params.map((param) => this.visit(param))],
      };
    }

    return {
      type: "CallExpression",
      callee: this.visit(e.fn),
      arguments: e.params.map((param) => this.visit(param)),
      optional: false,
    };
  }

  visitMemberExpr(e: ast.MemberExpr): ESTree.MemberExpression {
    return {
      type: "MemberExpression",
      object: this.visit(e.object),
      optional: false,
      property: {
        type: "Identifier",
        name: e.property.name,
      },
      computed: false,
    };
  }

  visitIdentifier(e: ast.Identifier): ESTree.Identifier {
    return {
      type: "Identifier",
      name: e.name,
    };
  }

  visitAssignmentStatement(
    e: ast.AssignmentStatement
  ): ESTree.ExpressionStatement {
    // Handle assignments to dereferenced pointers
    if (e.left instanceof ast.DerefExpr) {
      return {
        type: "ExpressionStatement",
        expression: {
          type: "CallExpression",
          callee: this.visit(e.left.expr),
          arguments: [this.visit(e.right)],
          optional: false,
        },
      };
    }

    return {
      type: "ExpressionStatement",
      expression: {
        type: "AssignmentExpression",
        operator: "=",
        left: this.visit(e.left),
        right: this.visit(e.right),
      },
    };
  }

  visitEnumDec(e: ast.EnumDec): ESTree.VariableDeclaration {
    return {
      type: "VariableDeclaration",
      kind: "const",
      declarations: [
        {
          type: "VariableDeclarator",
          id: {
            type: "Identifier",
            name: e.name.name,
          },
          init: {
            type: "ObjectExpression",
            properties: e.entries.map((entry) => this.visit(entry)),
          },
        },
      ],
    };
  }

  visitFunctionCallStmt(e: ast.FunctionCallStmt): ESTree.ExpressionStatement {
    return {
      type: "ExpressionStatement",
      expression: this.visit(e.fnCall),
    };
  }

  visitIfStatement(e: ast.IfStatement): ESTree.IfStatement {
    return {
      type: "IfStatement",
      test: this.visit(e.condition),
      consequent: this.visit(e.scope),
    };
  }

  visitForStatement(e: ast.ForStatement): ESTree.ForStatement {
    return {
      type: "ForStatement",
      body: this.visit(e.scope),
    };
  }

  visitForExprStatement(e: ast.ForExprStatement): ESTree.ForOfStatement {
    return this.makeForStatement(e.scope!, e.expr);
  }

  visitForVarDefStatement(e: ast.ForVarDefStatement): ESTree.ForOfStatement {
    return this.makeForStatement(e.scope!, e.expr, e.id);
  }

  makeForStatement(
    body: ast.Scope,
    expr: ast.Expr,
    variable?: string
  ): ESTree.ForOfStatement {
    return {
      type: "ForOfStatement",
      body: this.visit(body),
      await: false,
      left: {
        type: "VariableDeclaration",
        kind: "let",
        declarations: [
          {
            type: "VariableDeclarator",
            id: {
              type: "Identifier",
              name: variable || "__none",
            },
          },
        ],
      },
      right: {
        type: "CallExpression",
        optional: false,
        callee: {
          type: "Identifier",
          name: "__iterate",
        },
        arguments: [this.visit(expr)],
      },
    };
  }

  visitBreakStatement(e: ast.BreakStatement): ESTree.BreakStatement {
    return {
      type: "BreakStatement",
    };
  }

  visitEnumEntry(e: ast.EnumEntry): ESTree.Property {
    return {
      type: "Property",
      key: this.visit(e.name),
      value: {
        type: "Literal",
        value: e.value,
      },
      kind: "init",
      method: false,
      shorthand: false,
      computed: false,
    };
  }

  visitReturnStatement(e: ast.ReturnStatement): ESTree.ReturnStatement {
    return {
      type: "ReturnStatement",
      argument: e.expr && this.visit(e.expr),
    };
  }

  visitObjectLiteralExpr(e: ast.ObjectLiteralExpr): ESTree.NewExpression {
    let obj: types.Struct = getFromTypemap<types.Struct>(this.typemap, e);

    const args = [...obj.fields.entries()].map<ESTree.Expression>(
      ([name, type]) => {
        const value = e.entries.get(name);
        let expr: ESTree.Expression;

        if (!value) {
          expr = defaultValueForType(type);
        } else {
          expr = this.visit(value.expr);
        }

        return expr;
      }
    );

    return {
      type: "NewExpression",
      arguments: args,
      callee: {
        type: "Identifier",
        name: e.type!.name, // TODO: Get this to work for implicit literals
      },
    };
  }

  visitStructDec(e: ast.StructDec) {
    return [];
  }

  visitMethods(e: ast.Methods) {
    return e.functions.map((fn) => this.visit(fn));
  }

  visitArrayLiteralExpr(e: ast.ArrayLiteralExpr): ESTree.ArrayExpression {
    return {
      type: "ArrayExpression",
      elements: e.entries.map((e) => this.visit(e)),
    };
  }

  visitArrayAccessExpr(e: ast.ArrayAccessExpr): ESTree.MemberExpression {
    return {
      type: "MemberExpression",
      optional: false,
      computed: true,
      object: this.visit(e.array),
      property: this.visit(e.property),
    };
  }
}

function defaultValueForType(t: types.TypeNode): ESTree.Expression {
  // TODO: Implement for all kinds of types
  switch (t.constructor) {
    case types.Boolean:
      return {
        type: "Identifier",
        name: "false",
      };
    case types.Integer:
      return {
        type: "Literal",
        value: 0,
      };
    case types.RefType:
      return {
        type: "Literal",
        value: null,
      };
    case types.Struct:
      return {
        type: "NewExpression",
        callee: {
          type: "Identifier",
          name: (t as types.Struct).name,
        },
        arguments: [
          ...(t as types.Struct).fields.entries(),
        ].map(([name, type]) => defaultValueForType(type)),
      };
    default:
      return {
        type: "Literal",
        value: null,
      };
  }
}

function fnNameFromTrait(
  fn: types.Function,
  trait: types.Trait = types.NoTrait
): string {
  if (trait == types.NoTrait) {
    return fn.name;
  }
  return `${fn.name}$${trait.name}`;
}

function suggestFunctionName(t: types.Function): string {
  // TODO: Namespacing
  return fnNameFromTrait(t, t.trait);
}

function getTypeName(t: types.TypeNode): string {
  switch (t.constructor) {
    case types.Boolean:
      return "bool";
    case types.Integer:
      return "int";
    case types.RefType:
      return "ref" + getTypeName((t as types.RefType).ref);
    case types.Struct:
      return (t as types.Struct).name;
    default:
      return "unk";
  }
}

function generateMainFnCall(): ESTree.ExpressionStatement {
  return {
    type: "ExpressionStatement",
    expression: {
      type: "CallExpression",
      optional: false,
      callee: {
        type: "Identifier",
        name: "main",
      },
      arguments: [],
    },
  };
}

function generateIterateFn(
  nextFnName: string = "next$Iterator"
): ESTree.FunctionDeclaration {
  return {
    type: "FunctionDeclaration",
    generator: true,
    id: {
      type: "Identifier",
      name: "__iterate",
    },
    params: [
      {
        type: "Identifier",
        name: "it",
      },
    ],
    body: {
      type: "BlockStatement",
      body: [
        {
          type: "VariableDeclaration",
          kind: "let",
          declarations: [
            {
              type: "VariableDeclarator",
              id: {
                type: "Identifier",
                name: "result",
              },
              init: {
                type: "CallExpression",
                optional: false,
                arguments: [],
                callee: {
                  type: "MemberExpression",
                  optional: false,
                  property: {
                    type: "Identifier",
                    name: nextFnName,
                  },
                  computed: false,
                  object: {
                    type: "Identifier",
                    name: "it",
                  },
                },
              },
            },
          ],
        },
        {
          type: "WhileStatement",
          test: {
            type: "UnaryExpression",
            operator: "!",
            prefix: true,
            argument: {
              type: "MemberExpression",
              computed: false,
              optional: false,
              property: {
                type: "Identifier",
                name: "done",
              },
              object: {
                type: "Identifier",
                name: "result",
              },
            },
          },
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "YieldExpression",
                  delegate: false,
                  argument: {
                    type: "MemberExpression",
                    computed: false,
                    optional: false,
                    property: {
                      type: "Identifier",
                      name: "value",
                    },
                    object: {
                      type: "Identifier",
                      name: "result",
                    },
                  },
                },
              },
              {
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "=",
                  left: {
                    type: "Identifier",
                    name: "result",
                  },
                  right: {
                    type: "CallExpression",
                    optional: false,
                    arguments: [],
                    callee: {
                      type: "MemberExpression",
                      optional: false,
                      property: {
                        type: "Identifier",
                        name: nextFnName,
                      },
                      computed: false,
                      object: {
                        type: "Identifier",
                        name: "it",
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
  };
}

function jsStructName(node: types.Struct): string {
  if (node.template && node.template.params.length) {
    return node.template.factory.getName();
  } else {
    return node.name;
  }
}
