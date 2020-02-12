export class Node {
}

export class ExprNode extends Node {}

export enum InfixOperator {
    Addition = "+",
    Subtraction = "-",
    Multiplication = "*",
    Division = "/",
    Equals = "=",
    Unequals = "!="
}

export class InfixExprNode extends ExprNode {
    operator: InfixOperator;
    left: ExprNode;
    right: ExprNode;
}

export class NumberNode extends ExprNode {
    value: number;
}

export class FunctionCallExprNode extends ExprNode {
    fn: ExprNode;
    params: ExprNode[];
}

export class IdentifierExprNode extends ExprNode {
    id: IdentifierNode;
}

export class MemberExprNode extends ExprNode {
    object: ExprNode;
    property: string;
}

export class ObjectLiteralExprNode extends ExprNode {
    entries: Map<string, ExprNode>
}

export class IdentifierNode extends Node {
    name: string;
}

export class StatementNode extends Node {}

export class AssignmentStatementNode extends StatementNode {
    left: ExprNode;
    right: ExprNode;
}

export class IfStatementNode extends StatementNode {
    condition: ExprNode;
    scope: ScopeNode;
}

export class ForStatementNode extends StatementNode {
    scope: ScopeNode;
}

export class ForAssignStatementNode extends ForStatementNode {
    left: ExprNode;
    right: ExprNode;
}

export class ForExprStatementNode extends ForStatementNode {
    expr: ExprNode;
}

export class ForVarDefStatementNode extends ForStatementNode {
    id: string;
    type?: TypeNode;
    expr: ExprNode;
}

export class ReturnStatementNode extends StatementNode {
    expr?: ExprNode;
}

export class BreakStatementNode extends StatementNode {

}

export class FunctionCallStmtNode extends StatementNode {
    fnCall: FunctionCallExprNode
}

export class DeclarationNode extends StatementNode {

}

export class FunctionDecNode extends DeclarationNode {
    name: IdentifierNode;
    params: VarDecNode[];
    body?: ScopeNode;
    returns: TypeNode;
    tags: TagNode[];
}

export class TagNode extends Node {
    name: string;
}

export class ScopeNode extends Node {
    statements: StatementNode[];
}

export class VarDecNode extends DeclarationNode {
    left: IdentifierNode;
    type: TypeNode;
    init?: ExprNode;
}

export class EnumDecNode extends DeclarationNode {
    name: IdentifierNode;
    entries: EnumEntryNode[];
}

export class ClassDecNode extends DeclarationNode {
    name: IdentifierNode;
    declarations: DeclarationNode[];
    templateParams: VarDecNode[];
}

export class EnumEntryNode extends Node {
    name: IdentifierNode;
    value: any;
}

export class TypeNode extends Node {
    name?: string;
    templateParams: (TypeNode | ExprNode)[];
}

export class ProgramNode extends Node {
    declarations: DeclarationNode[]
}

export class InheritNode extends DeclarationNode {
    class: TypeNode;
}

export class AliasDecNode extends DeclarationNode {
  left: IdentifierNode;
  templateParams: VarDecNode[];
  alias: TypeNode;
}
