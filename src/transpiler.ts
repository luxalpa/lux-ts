import * as ast from "./ast";
import { InfixOperator } from "./ast";
import * as ESTree from "estree";
import * as types from "./typenodes";
import { create } from "./util";

class ClassInfo {
  astNode: ast.ClassDecNode;
  memberVars: ast.VarDecNode[];
  methods: ast.FunctionDecNode[];
}

export class Transpiler {
  classMap: Map<types.Class, ClassInfo>;

  constructor(
    private typemap: Map<ast.Node, types.TypeNode>,
    private usedClasses: ast.ClassDecNode[]
  ) {
    this.buildClassMap();
  }

  buildClassMap() {
    this.classMap = new Map<types.Class, ClassInfo>();

    for (let dec of this.usedClasses) {
      let classInfo = create(ClassInfo, {
        astNode: dec,
        memberVars: [],
        methods: []
      });

      this.classMap.set(this.typemap.get(dec) as types.Class, classInfo);
    }

    for (let classInfo of this.classMap.values()) {
      let processedFunctions: types.Function[] = [];

      for (let dec of this.getAllDeclarations(classInfo.astNode)) {
        if (dec instanceof ast.VarDecNode) {
          classInfo.memberVars.push(dec);
        } else if (dec instanceof ast.FunctionDecNode) {
          let d = <ast.FunctionDecNode>dec;
          let fnType = this.typemap.get(d) as types.Function;

          let idx = processedFunctions.findIndex(fn => {
            if (
              fnType.isStatic !== fn.isStatic ||
              fnType.returns !== fn.returns ||
              fn.name !== fnType.name ||
              fn.parameters.length !== fnType.parameters.length
            ) {
              return false;
            }

            for (let i = 0; i < fnType.parameters.length; i++) {
              if (fnType.parameters[i] !== fn.parameters[i]) {
                return false;
              }
            }

            return true;
          });

          if (idx === -1) {
            processedFunctions.push(fnType);
            classInfo.methods.push(dec);
          }
        } else if (!(dec instanceof ast.InheritNode)) {
          throw new Error(
            `Class Declaration Node ${dec.constructor.name} not implemented`
          );
        }
      }
    }
  }

  transpile(program: ast.ProgramNode): ESTree.Program {
    let stmts: ESTree.Statement[] = [];
    for (let declaration of program.declarations) {
      if (declaration instanceof ast.ClassDecNode) {
        // These are being done separately
        continue;
      }

      if (declaration instanceof ast.AliasDecNode) {
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

    for (let declaration of this.usedClasses) {
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

  visit(n: ast.Node) {
    if (!n) {
      throw new Error("visit: Node is undefined");
    }
    if (n.constructor.name == "Object") {
      throw new Error(`Object without type: (${JSON.stringify(n)})`);
    }
    let fn = this["visit" + n.constructor.name];
    if (!fn) {
      throw new Error(`Transpiler: ${n.constructor.name} is unimplemented!`);
    }
    return fn.call(this, n);
  }

  visitVarDecNode(e: ast.VarDecNode): ESTree.VariableDeclaration {
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

  visitFunctionDecNode(e: ast.FunctionDecNode): ESTree.FunctionDeclaration {
    return {
      type: "FunctionDeclaration",
      id: this.visit(e.name),
      body: this.visit(e.body),
      params: e.params.map(param => {
        return <ESTree.Identifier>{
          type: "Identifier",
          name: param.left.name
        };
      })
    };
  }

  makeFunctionExpression(e: ast.FunctionDecNode): ESTree.FunctionExpression {
    return {
      type: "FunctionExpression",
      body: this.visit(e.body),
      params: e.params.map(param => {
        return <ESTree.Identifier>{
          type: "Identifier",
          name: param.left.name
        };
      })
    };
  }

  visitScopeNode(e: ast.ScopeNode): ESTree.BlockStatement {
    return {
      type: "BlockStatement",
      body: e.statements.map(statement => this.visit(statement))
    };
  }

  visitInfixExprNode(e: ast.InfixExprNode): ESTree.BinaryExpression {
    let op: ESTree.BinaryOperator;
    switch (e.operator) {
      case InfixOperator.Equals:
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

  visitNumberNode(e: ast.NumberNode): ESTree.SimpleLiteral {
    return {
      type: "Literal",
      value: e.value
    };
  }

  visitIdentifierExprNode(e: ast.IdentifierExprNode): ESTree.Identifier {
    return this.visit(e.id);
  }

  visitRefExprNode(e: ast.RefExprNode): ESTree.Expression {
    const t = this.typemap.get(e.expr);

    if(t instanceof types.Class || t instanceof types.Function) {
      return this.visit(e.expr)
    }

    console.log(t)

    return {
      type: "ArrowFunctionExpression",
      expression: true,
      body: this.visit(e.expr),
      params: []
    }
  }

  visitDerefExprNode(e: ast.DerefExprNode): ESTree.Expression {
    const t = this.typemap.get(e);
    if(t instanceof types.Class) {
      return this.visit(e.expr)
    }
    return {
      type: "CallExpression",
      callee: this.visit(e.expr),
      arguments: []
    }
  }

  visitFunctionCallExprNode(
    e: ast.FunctionCallExprNode
  ): ESTree.SimpleCallExpression {
    return {
      type: "CallExpression",
      callee: this.visit(e.fn),
      arguments: e.params.map(param => this.visit(param))
    };
  }

  visitMemberExprNode(e: ast.MemberExprNode): ESTree.MemberExpression {
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

  visitIdentifierNode(e: ast.IdentifierNode): ESTree.Identifier {
    return {
      type: "Identifier",
      name: e.name
    };
  }

  visitAssignmentStatementNode(
    e: ast.AssignmentStatementNode
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

  visitEnumDecNode(e: ast.EnumDecNode): ESTree.VariableDeclaration {
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

  visitFunctionCallStmtNode(
    e: ast.FunctionCallStmtNode
  ): ESTree.ExpressionStatement {
    return {
      type: "ExpressionStatement",
      expression: this.visit(e.fnCall)
    };
  }

  visitIfStatementNode(e: ast.IfStatementNode): ESTree.IfStatement {
    return {
      type: "IfStatement",
      test: this.visit(e.condition),
      consequent: this.visit(e.scope)
    };
  }

  visitForStatementNode(e: ast.ForStatementNode): ESTree.ForStatement {
    return {
      type: "ForStatement",
      body: this.visit(e.scope)
    };
  }

  visitForExprStatementNode(e: ast.ForExprStatementNode): ESTree.ForStatement {
    return this.makeForStatement(e.scope, e.expr);
  }

  visitForVarDefStatementNode(
    e: ast.ForVarDefStatementNode
  ): ESTree.ForStatement {
    return this.makeForStatement(
      e.scope,
      e.expr,
      {
        type: "AssignmentExpression",
        operator: "=",
        left: {
          type: "Identifier",
          name: e.id
        },
        right: undefined
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
    body: ast.ScopeNode,
    expr: ast.ExprNode,
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

  visitBreakStatementNode(e: ast.BreakStatementNode): ESTree.BreakStatement {
    return {
      type: "BreakStatement"
    };
  }

  visitEnumEntryNode(e: ast.EnumEntryNode): ESTree.Property {
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

  visitReturnStatementNode(e: ast.ReturnStatementNode): ESTree.ReturnStatement {
    return {
      type: "ReturnStatement",
      argument: e.expr && this.visit(e.expr)
    };
  }

  visitObjectLiteralExprNode(
    e: ast.ObjectLiteralExprNode
  ): ESTree.NewExpression {
    let obj: types.ObjectLiteral = this.typemap.get(e) as types.ObjectLiteral;

    let args: ESTree.Expression[] = <ESTree.Expression[]>(
      this.classMap.get(obj.resolved).memberVars.map(dec => {
        let t = e.entries.get(dec.left.name);
        if (!t) {
          return {
            type: "Identifier",
            name: "null"
          };
        }
        return this.visit(t);
      })
    );

    return {
      type: "NewExpression",
      callee: {
        type: "Identifier",
        name: obj.resolved.name
      },
      arguments: args
    };
  }

  visitClassDecNode(e: ast.ClassDecNode) {
    let params: ESTree.Identifier[] = [];
    let assignments: ESTree.Statement[] = [];
    let stmts: ESTree.Statement[] = [];

    let processedFunctions: types.Function[] = [];

    let cl = this.typemap.get(e) as types.Class;

    if (cl.abstract) {
      return [];
    }

    let classInfo = this.classMap.get(cl);

    for (let dec of classInfo.memberVars) {
      let { param, stmt } = createConstrAssign((<ast.VarDecNode>dec).left.name);
      params.push(param);
      assignments.push(stmt);
    }

    for (let dec of classInfo.methods) {
      if (!dec.body) {
        throw new Error(
          `Function ${e.name.name}.${dec.name.name} missing body`
        );
      }
      let fn = this.makeFunctionExpression(dec);
      let fnType = this.typemap.get(dec) as types.Function;
      let st = createConstrFn(
        e.name.name,
        fnType.isStatic,
        this.visit(dec.name),
        fn
      );
      stmts.push(st);
    }

    return [
      {
        type: "FunctionDeclaration",
        id: this.visit(e.name),
        body: {
          type: "BlockStatement",
          body: assignments
        },
        params: params
      },
      ...stmts
    ];
  }

  *getAllDeclarations(
    e: ast.ClassDecNode
  ): IterableIterator<ast.DeclarationNode> {
    for (let dec of e.declarations) {
      yield dec;
    }
    let c = <types.Class>this.typemap.get(e);
    for (let inherit of c.inherits) {
      yield* this.getAllDeclarations(this.classMap.get(inherit).astNode);
    }
  }
}

function createConstrFn(
  typename: string,
  isStatic: boolean,
  name: ESTree.Identifier,
  fn: ESTree.FunctionExpression
): ESTree.ExpressionStatement {
  let filler: ESTree.Expression = isStatic
    ? name
    : {
        type: "MemberExpression",
        object: {
          type: "Identifier",
          name: "prototype"
        },
        property: name,
        computed: false
      };

  return {
    type: "ExpressionStatement",
    expression: {
      type: "AssignmentExpression",
      operator: "=",
      left: {
        type: "MemberExpression",
        object: {
          type: "Identifier",
          name: typename
        },
        property: filler,
        computed: false
      },
      right: fn
    }
  };
}

function createConstrAssign(
  name: string
): { param: ESTree.Identifier; stmt: ESTree.ExpressionStatement } {
  let param: ESTree.Identifier = {
    type: "Identifier",
    name
  };
  let stmt: ESTree.ExpressionStatement = {
    type: "ExpressionStatement",
    expression: {
      type: "AssignmentExpression",
      operator: "=",
      left: {
        type: "MemberExpression",
        object: {
          type: "ThisExpression"
        },
        property: {
          type: "Identifier",
          name
        },
        computed: false
      },
      right: {
        type: "Identifier",
        name
      }
    }
  };
  return { param, stmt };
}
