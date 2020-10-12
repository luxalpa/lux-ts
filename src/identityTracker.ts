import { ast } from "./ast";

export class IdentityTracker {
  private nextID = 0;
  idMap = new Map<ast.Node, number>();

  getNextID(): number {
    const id = this.nextID;
    this.nextID++;
    return id;
  }

  track(node: ast.Node, id: number) {
    this.idMap.set(node, id);
  }
}
