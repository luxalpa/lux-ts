import { CommonTokenStream } from "antlr4ts";

import { LuxLexer } from "../parser-ts/LuxLexer";
import { LuxParser } from "../parser-ts/LuxParser";
import { ParseTreeVisitor } from "./parseTreeVisitor";

import { generate } from "astring";
import { Transpiler, TranspilerOptions } from "./transpiler";
import * as fs from "fs";
import { TypeChecker } from "./typechecker";
import { CharStreams } from "antlr4ts/CharStreams";

export interface Options extends TranspilerOptions {}

export function compileCode(input: string, options?: Partial<Options>): string {
  const inputStream = CharStreams.fromString(input);
  const lexer = new LuxLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new LuxParser(tokenStream) as any;
  parser.buildParseTrees = true;
  const tree = parser.program();

  const visitor = new ParseTreeVisitor();
  const node = tree.accept(visitor);

  const typeChecker = new TypeChecker(node);
  const { typemap } = typeChecker.check();

  const transpiler = new Transpiler(typemap);
  const v = transpiler.transpile(node, options);

  return generate(v as any);
}

export function runCode(input: string, options?: Partial<Options>): any {
  const code = compileCode(input, options);
  return eval(code);
}
