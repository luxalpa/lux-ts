import * as ast from "./ast";
import * as types from "./typenodes";

export function create<T>(type: { new(...args : any[]): T ;}, obj: T): T {
    return Object.assign(new type(), obj);
}

export type TypeMap = Map<ast.Node, types.TypeNode>;

export function getFromTypemap(typeMap: TypeMap, node: ast.Node): types.TypeNode {
  const n = typeMap.get(node);
  if(n instanceof types.ResolvableType) {
    if(n.resolved instanceof types.ResolvableType) {
      throw new Error("ResolvableType'ception not implemented")
    }
    return n.resolved;
  }
  if(n === undefined) {
    throw new Error("Typemap: Type is undefined")
  }
  return n
}
