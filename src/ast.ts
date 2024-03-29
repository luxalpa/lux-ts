import { Range } from "./diagnostics";

export namespace ast {
  export class Node {
    range: Range;
  }

  export class Expr extends Node {}

  export class ErrorExpr extends Expr {}

  export enum InfixOperator {
    Addition = "+",
    Subtraction = "-",
    Multiplication = "*",
    Division = "/",
    Modulo = "%",
    Equals = "=",
    Unequals = "!=",
  }

  export class InfixExpr extends Expr {
    operator: InfixOperator;
    left: Expr;
    right: Expr;
  }

  export enum UnaryOperator {
    Copy = "+",
    Negative = "-",
    Not = "!",
  }

  export class UnaryExpression extends Expr {
    operator: UnaryOperator;
    expr: Expr;
  }

  export class Number extends Expr {
    value: number;
  }

  export class String extends Expr {
    str: string;
  }

  export class FunctionCallExpr extends Expr {
    fn: Expr;
    params: Expr[];
  }

  export class IdentifierExpr extends Expr {
    id: Identifier;
  }

  export class MemberExpr extends Expr {
    object: Expr;
    property: Identifier;
  }

  export class ArrayAccessExpr extends Expr {
    array: Expr;
    property: Expr;
  }

  export class ArrayLiteralExpr extends Expr {
    entries: Array<Expr>;
  }

  export class ObjectLiteralExpr extends Expr {
    type?: PlainType;
    entries: Map<string, { expr: Expr; range: Range }>;
  }

  export class Methods extends Node {
    type: Identifier;
    trait?: Type;
    templateParams: Identifier[];
    templateParamsRange: Range;
    functions: FunctionDec[];
  }

  export class Trait extends Node {
    name: Identifier;
    templateParams: VarDec[];
    functions: TraitFnDec[];
  }

  export class TraitFnDec extends Node {
    name: Identifier;
    params: FnParamDec[];
    returns: Type;
  }

  // TODO: Convert to Unary Expr
  export class RefExpr extends Expr {
    expr: Expr;
  }

  export class DerefExpr extends Expr {
    expr: Expr;
  }

  export class Identifier extends Node {
    name: string;
  }

  export class Statement extends Node {}

  export enum AssignmentOperator {
    Set = "=",
    Increment = "+=",
    Decrement = "-=",
    Multiply = "*=",
    Divide = "/=",
    Modulo = "%=",
    Or = "|=",
    And = "&=",
    Xor = "^=",
    Optional = "?=",
  }

  export class AssignmentStatement extends Statement {
    left: Expr;
    op: AssignmentOperator;
    right: Expr;
  }

  export class IfStatement extends Statement {
    condition: Expr;
    scope: Scope;
  }

  export class ForStatement extends Statement {
    scope?: Scope;
  }

  export class ForAssignStatement extends ForStatement {
    left: Expr;
    right: Expr;
  }

  export class ForExprStatement extends ForStatement {
    expr: Expr;
  }

  export class ForVarDefStatement extends ForStatement {
    id: string;
    type?: Type;
    expr: Expr;
  }

  export class ReturnStatement extends Statement {
    expr?: Expr;
  }

  export class BreakStatement extends Statement {}

  export class FunctionCallStmt extends Statement {
    fnCall: FunctionCallExpr;
  }

  export class Declaration extends Statement {}

  export class FunctionDec extends Declaration {
    name: Identifier;
    params: FnParamDec[];
    body?: Scope;
    returns?: Type;
  }

  export class Scope extends Node {
    statements: Statement[];
  }

  export class VarDec extends Declaration {
    left: Identifier;
    type?: Type;
    init?: Expr;
  }

  export class FnParamDec extends Declaration {
    left: Identifier;
    type?: Type;
    init?: Expr;
    ellipsis: boolean;
  }

  export class EnumDec extends Declaration {
    name: Identifier;
    entries: EnumEntry[];
  }

  export class StructDec extends Declaration {
    name: Identifier;
    declarations: VarDec[];
    templateParams: VarDec[];
  }

  export class EnumEntry extends Node {
    name: Identifier;
    value: any;
  }

  export class Type extends Node {}

  export class PlainType extends Type {
    name: string;
    templateParams: Type[];
  }

  export class RefType extends Type {
    type: Type;
  }

  export class FunctionPtrType extends Type {
    params: FnParamDec[];
    returns: Type;
  }

  export class Program extends Node {
    declarations: Declaration[];
  }

  export class AliasDec extends Declaration {
    left: Identifier;
    templateParams: VarDec[];
    alias: Type;
  }
}
