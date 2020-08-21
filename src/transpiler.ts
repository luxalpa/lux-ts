import { ast } from "./ast";
import * as ESTree from "estree";
import * as types from "./typenodes";
import { getFromTypemap } from "./util";

export class Transpiler {
  functionNameMap = new Map<types.Function, string>();
  functionNamesUsed = new Set<string>();

  constructor(private typemap: Map<ast.Node, types.TypeNode>) {}

  transpile(program: ast.Program): ESTree.Program {
    let stmts: ESTree.Statement[] = [];
    for (let declaration of program.declarations) {
      if (declaration instanceof ast.StructDec) {
        // These are being done separately
        continue;
      }

      if (declaration instanceof ast.AliasDec) {
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

    return {
      type: "Program",
      sourceType: "script",
      body: stmts
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

  uniqueFunctionName(t: types.Function, suggestedName: string = ""): string {
    if (suggestedName === "") {
      suggestedName = suggestFunctionName(t);
    }
    const cached = this.functionNameMap.get(t);
    if (cached) {
      return cached;
    }
    const originalSuggestedName = suggestedName;

    let i = 1;
    while (this.functionNamesUsed.has(suggestedName)) {
      suggestedName = `${originalSuggestedName}_${i}`;
      i++;
    }

    this.functionNamesUsed.add(suggestedName);
    this.functionNameMap.set(t, suggestedName);
    return suggestedName;
  }

  visitVarDec(e: ast.VarDec): ESTree.VariableDeclaration {
    return {
      declarations: [
        {
          type: "VariableDeclarator",
          id: {
            type: "Identifier",
            name: e.left.name
          },
          init: e.init && this.visit(e.init)
        }
      ],
      kind: "let",
      type: "VariableDeclaration"
    };
  }

  visitFunctionDec(e: ast.FunctionDec): ESTree.FunctionDeclaration {
    const fn = getFromTypemap<types.Function>(this.typemap, e);
    const name = this.uniqueFunctionName(fn);

    let params: ESTree.Pattern[] = e.params.map(param => ({
      type: "Identifier",
      name: param.left.name
    }));
    if (fn.belongsTo) {
      params = [{ type: "Identifier", name: "__self" }, ...params];
    }

    return {
      type: "FunctionDeclaration",
      id: {
        type: "Identifier",
        name
      },
      body: this.visit(e.body),
      params
    };
  }

  visitScope(e: ast.Scope): ESTree.BlockStatement {
    return {
      type: "BlockStatement",
      body: e.statements.map(statement => this.visit(statement))
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
      type: "BinaryExpression"
    };
  }

  visitNumber(e: ast.Number): ESTree.SimpleLiteral {
    return {
      type: "Literal",
      value: e.value
    };
  }

  visitIdentifierExpr(e: ast.IdentifierExpr): ESTree.Identifier {
    const fn = getFromTypemap(this.typemap, e);
    if (fn instanceof types.Function) {
      return {
        type: "Identifier",
        name: this.uniqueFunctionName(fn)
      };
    }
    return this.visit(e.id);
  }

  visitRefExpr(e: ast.RefExpr): ESTree.Expression {
    const t = getFromTypemap(this.typemap, e.expr);

    if (t instanceof types.Struct || t instanceof types.Function) {
      return this.visit(e.expr);
    }

    return {
      type: "ArrowFunctionExpression",
      expression: true,
      body: this.visit(e.expr),
      params: []
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
      arguments: []
    };
  }

  visitFunctionCallExpr(e: ast.FunctionCallExpr): ESTree.SimpleCallExpression {
    if (e.fn instanceof ast.MemberExpr) {
      const fnType = getFromTypemap<types.Function>(this.typemap, e.fn);
      return {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: this.uniqueFunctionName(fnType)
        },
        arguments: [
          this.visit(e.fn.object),
          ...e.params.map(param => this.visit(param))
        ]
      };
    }

    return {
      type: "CallExpression",
      callee: this.visit(e.fn),
      arguments: e.params.map(param => this.visit(param))
    };
  }

  visitMemberExpr(e: ast.MemberExpr): ESTree.MemberExpression {
    return {
      type: "MemberExpression",
      object: this.visit(e.object),
      property: {
        type: "Identifier",
        name: e.property
      },
      computed: false
    };
  }

  visitIdentifier(e: ast.Identifier): ESTree.Identifier {
    return {
      type: "Identifier",
      name: e.name === "this" ? "__self" : e.name
    };
  }

  visitAssignmentStatement(
    e: ast.AssignmentStatement
  ): ESTree.ExpressionStatement {
    return {
      type: "ExpressionStatement",
      expression: {
        type: "AssignmentExpression",
        operator: "=",
        left: this.visit(e.left),
        right: this.visit(e.right)
      }
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
            name: e.name.name
          },
          init: {
            type: "ObjectExpression",
            properties: e.entries.map(entry => this.visit(entry))
          }
        }
      ]
    };
  }

  visitFunctionCallStmt(e: ast.FunctionCallStmt): ESTree.ExpressionStatement {
    return {
      type: "ExpressionStatement",
      expression: this.visit(e.fnCall)
    };
  }

  visitIfStatement(e: ast.IfStatement): ESTree.IfStatement {
    return {
      type: "IfStatement",
      test: this.visit(e.condition),
      consequent: this.visit(e.scope)
    };
  }

  visitForStatement(e: ast.ForStatement): ESTree.ForStatement {
    return {
      type: "ForStatement",
      body: this.visit(e.scope)
    };
  }

  visitForExprStatement(e: ast.ForExprStatement): ESTree.ForStatement {
    return this.makeForStatement(e.scope!, e.expr);
  }

  visitForVarDefStatement(e: ast.ForVarDefStatement): ESTree.ForStatement {
    return this.makeForStatement(
      e.scope!,
      e.expr,
      {
        type: "AssignmentExpression",
        operator: "=",
        left: {
          type: "Identifier",
          name: e.id
        },
        right: (undefined as unknown) as ESTree.Expression
      },
      {
        type: "VariableDeclarator",
        id: {
          type: "Identifier",
          name: e.id
        }
      }
    );
  }

  makeForStatement(
    body: ast.Scope,
    expr: ast.Expr,
    optAssign?: ESTree.AssignmentExpression,
    optDeclaration?: ESTree.VariableDeclarator
  ): ESTree.ForStatement {
    const loopTemp = "_loopTemp"; // TODO: Make unique

    let init = this.visit(expr);

    const updateExprRightHand: ESTree.Expression = {
      type: "CallExpression",
      arguments: [],
      callee: {
        type: "MemberExpression",
        object: {
          type: "Identifier",
          name: loopTemp
        },
        property: {
          type: "Identifier",
          name: "next"
        },
        computed: false
      }
    };

    let updateExpr: ESTree.Expression = updateExprRightHand;

    if (optAssign) {
      updateExpr = {
        ...optAssign,
        right: updateExpr
      };
    }

    let declarations: ESTree.VariableDeclarator[] = [
      {
        type: "VariableDeclarator",
        id: {
          type: "Identifier",
          name: loopTemp
        },
        init
      }
    ];

    if (optDeclaration) {
      declarations.push({
        ...optDeclaration,
        init: updateExprRightHand
      });
    }

    return {
      type: "ForStatement",
      body: this.visit(body),
      init: {
        type: "VariableDeclaration",
        kind: "let",
        declarations
      },
      test: {
        type: "UnaryExpression",
        operator: "!",
        prefix: true,
        argument: {
          type: "CallExpression",
          arguments: [],
          callee: {
            type: "MemberExpression",
            object: {
              type: "Identifier",
              name: loopTemp
            },
            property: {
              type: "Identifier",
              name: "atEnd"
            },
            computed: false
          }
        }
      },
      update: updateExpr
    };
  }

  visitBreakStatement(e: ast.BreakStatement): ESTree.BreakStatement {
    return {
      type: "BreakStatement"
    };
  }

  visitEnumEntry(e: ast.EnumEntry): ESTree.Property {
    return {
      type: "Property",
      key: this.visit(e.name),
      value: {
        type: "Literal",
        value: e.value
      },
      kind: "init",
      method: false,
      shorthand: false,
      computed: false
    };
  }

  visitReturnStatement(e: ast.ReturnStatement): ESTree.ReturnStatement {
    return {
      type: "ReturnStatement",
      argument: e.expr && this.visit(e.expr)
    };
  }

  visitObjectConstructionExpr(
    e: ast.ObjectConstructionExpr
  ): ESTree.ObjectExpression {
    let obj: types.Struct = getFromTypemap<types.Struct>(this.typemap, e);

    const properties = [...obj.fields.entries()].map<ESTree.Property>(
      ([name, type]) => {
        const value = e.entries.get(name);
        let expr: ESTree.Expression;

        if (!value) {
          expr = defaultValueForType(type);
        } else {
          expr = this.visit(value);
        }

        return {
          type: "Property",
          method: false,
          computed: false,
          shorthand: false,
          key: {
            type: "Identifier",
            name
          },
          value: expr,
          kind: "init"
        };
      }
    );

    return {
      type: "ObjectExpression",
      properties
    };
  }

  visitStructDec(e: ast.StructDec) {
    return [];
  }

  visitBehavior(e: ast.Behavior) {
    return e.functions.map(fn => this.visit(fn));
  }
}

function defaultValueForType(t: types.TypeNode): ESTree.Expression {
  // TODO: Implement for all kinds of types
  switch (t.constructor) {
    case types.Boolean:
      return {
        type: "Identifier",
        name: "false"
      };
    case types.Integer:
      return {
        type: "Literal",
        value: 0
      };
    case types.RefType:
      return {
        type: "Literal",
        value: null
      };
    case types.Struct:
      return {
        type: "ObjectExpression",
        properties: [...(t as types.Struct).fields.entries()].map(
          ([name, type]) => ({
            type: "Property",
            kind: "init",
            key: {
              type: "Identifier",
              name
            },
            shorthand: false,
            computed: false,
            method: false,
            value: defaultValueForType(type)
          })
        )
      };
    default:
      return {
        type: "Literal",
        value: null
      };
  }
}

function suggestFunctionName(t: types.Function): string {
  // TODO: Namespacing
  if (t.belongsTo) {
    return `${getTypeName(t.belongsTo)}$${t.name}`;
  }
  return t.name;
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
