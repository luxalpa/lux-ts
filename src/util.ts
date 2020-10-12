import { ast } from "./ast";
import * as types from "./typenodes";

export function create<T>(type: { new (...args: any[]): T }, obj: T): T {
  return Object.assign(new type(), obj);
}

export type TypeMap = Map<ast.Node, types.TypeNode>;

export function getFromTypemap<T extends types.TypeNode>(
  typeMap: TypeMap,
  node: ast.Node
): T {
  const n = typeMap.get(node);
  if (n === undefined) {
    throw new Error(
      `Typemap: Type is undefined: ${node.constructor.name}${JSON.stringify(
        node
      )}`
    );
  }
  return n as T;
}
