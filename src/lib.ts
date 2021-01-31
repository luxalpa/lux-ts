import { CommonTokenStream } from "antlr4ts";

import { LuxLexer } from "../parser-ts/LuxLexer";
import { LuxParser } from "../parser-ts/LuxParser";
import { ParseTreeVisitor } from "./parseTreeVisitor";

import { generate } from "astring";
import { Transpiler, TranspilerImport, TranspilerOptions } from "./transpiler";
import { TypeChecker } from "./typechecker";
import { CharStreams } from "antlr4ts/CharStreams";
import { ast } from "./ast";
import { readFileSync } from "fs";

export interface Options extends TranspilerOptions {}

export interface CompilerContext {
  external(
    node: ast.Declaration,
    fn?: string,
    lib?: string,
    simple?: boolean
  ): void;
  include(filename: string): ast.Node[];
}

interface ASTBuilderResult {
  program: ast.Program;
  transpilerImports: Map<ast.Declaration, TranspilerImport | undefined>;
}

export function buildASTProgram(input: string): ASTBuilderResult {
  const inputStream = CharStreams.fromString(input);
  const lexer = new LuxLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new LuxParser(tokenStream) as any;
  parser.buildParseTrees = true;
  const tree = parser.program();

  const transpilerImports = new Map<
    ast.Declaration,
    TranspilerImport | undefined
  >();

  const ctx: CompilerContext = {
    external(
      node: ast.Declaration,
      fn?: string,
      lib?: string,
      simple?: boolean
    ) {
      transpilerImports.set(
        node,
        fn
          ? {
              fn,
              lib: `${lib}`,
              simple: !!simple,
            }
          : undefined
      );
    },
    include(filename: string): ast.Node[] {
      const code = readFileSync(filename);
      const p = buildASTProgram(code.toString());
      for (let [key, value] of p.transpilerImports.entries()) {
        transpilerImports.set(key, value);
      }

      return p.program.declarations;
    },
  };

  const visitor = new ParseTreeVisitor(ctx);
  const program = tree.accept(visitor);

  return {
    program,
    transpilerImports,
  };
}

export function compileCode(input: string, options?: Partial<Options>): string {
  const { program, transpilerImports } = buildASTProgram(input);

  const typeChecker = new TypeChecker();
  const { typemap } = typeChecker.checkProgram(program);

  const transpiler = new Transpiler(typemap);
  const v = transpiler.transpileProgram(program, transpilerImports, options);

  return generate(v as any);
}

export function runCode(input: string, options?: Partial<Options>): any {
  const code = compileCode(input, options);
  return eval(code);
}

export function runMacro(expr: ast.Expr, ctx: CompilerContext): ast.Node[] {
  // TODO: This probably needs to support other macro statements as well

  const typeChecker = new TypeChecker();
  const { typemap } = typeChecker.checkExpr(expr);

  const transpiler = new Transpiler(typemap);
  const v = transpiler.transpileExpr(expr);

  const code = generate(v as any);

  return function (this: CompilerContext) {
    const include = this.include;
    return eval(code);
  }.call(ctx);
}

export function runAstExpr(
  expr: ast.Expr,
  target: ast.Declaration,
  ctx: CompilerContext
) {
  const typeChecker = new TypeChecker();
  const { typemap } = typeChecker.checkExpr(expr);

  const transpiler = new Transpiler(typemap);
  const v = transpiler.transpileExpr(expr);

  const code = generate(v as any);

  (function (this: CompilerContext) {
    const external = this.external.bind(null, target);
    eval(code);
  }.call(ctx));
}
