import { CommonTokenStream } from "antlr4ts";

import { LuxLexer } from "../parser-ts/LuxLexer";
import { LuxParser } from "../parser-ts/LuxParser";
import { ParseTreeVisitor } from "./parseTreeVisitor";

import { generate } from "astring";
import { Transpiler, TranspilerImport, TranspilerOptions } from "./transpiler";
import * as fs from "fs";
import { TypeChecker } from "./typechecker";
import { CharStreams } from "antlr4ts/CharStreams";
import { ast } from "./ast";

export interface Options extends TranspilerOptions {}

export interface CompilerContext {
  external(fn: string, lib: string, simple: boolean): void;
}

export function compileCode(input: string, options?: Partial<Options>): string {
  const inputStream = CharStreams.fromString(input);
  const lexer = new LuxLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new LuxParser(tokenStream) as any;
  parser.buildParseTrees = true;
  const tree = parser.program();

  const transpilerImports = new Array<TranspilerImport>();

  const ctx: CompilerContext = {
    external(fn: string, lib: string, simple: boolean = false) {
      transpilerImports.push({
        fn,
        lib: `${lib}`,
        simple,
      });
    },
  };

  const visitor = new ParseTreeVisitor(ctx);
  const node = tree.accept(visitor);

  const typeChecker = new TypeChecker();
  const { typemap } = typeChecker.checkProgram(node);

  const transpiler = new Transpiler(typemap);
  const v = transpiler.transpileProgram(node, transpilerImports, options);

  return generate(v as any);
}

export function runCode(input: string, options?: Partial<Options>): any {
  const code = compileCode(input, options);
  return eval(code);
}

export function runAstExpr(node: ast.Expr, ctx: CompilerContext) {
  const typeChecker = new TypeChecker();
  const { typemap } = typeChecker.checkExpr(node);

  const transpiler = new Transpiler(typemap);
  const v = transpiler.transpileExpr(node);

  const code = "this." + generate(v as any);

  (function () {
    eval(code);
  }.call(ctx));
}
