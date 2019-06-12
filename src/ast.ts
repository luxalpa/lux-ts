export class Node {
}

export class ExprNode extends Node {}
export class InfixExprNode extends ExprNode {
    left: ExprNode;
    right: ExprNode;
}

export class AdditionNode extends InfixExprNode {}
export class SubtractionNode extends InfixExprNode {}
export class MultiplicationNode extends InfixExprNode {}
export class DivisionNode extends InfixExprNode {}
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
    left: IdentifierNode;
    right: ExprNode;
}

export class ReturnStatementNode extends StatementNode {
    expr?: ExprNode;
}

export class FunctionCallStmtNode extends StatementNode {
    fnCall: FunctionCallExprNode
}

export class DeclarationNode extends StatementNode {

}

export class FunctionDecNode extends DeclarationNode {
    name: IdentifierNode;
    params: VarDecNode[];
    body: ScopeNode;
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
    declarations: DeclarationNode[]
}

export class EnumEntryNode extends Node {
    name: IdentifierNode;
    value: any;
}

export class TypeNode extends Node {
    name?: string;
    namespace?: string;
}

export class ProgramNode extends Node {
    declarations: DeclarationNode[]
}

export class InterfaceImplementNode extends DeclarationNode {
    name: IdentifierNode;
    declarations: DeclarationNode[];
    tags: TagNode[];
}