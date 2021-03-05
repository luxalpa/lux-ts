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
import { DiagnosticsManager } from "./diagnostics";
import { Scanner } from "./scanner";
import { Parser } from "./parser";

export interface Options extends TranspilerOptions {
  compileOnly: boolean;
}

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

export function buildASTProgram(
  input: string,
  diagnosticsManager: DiagnosticsManager
): ASTBuilderResult {
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
      const p = buildASTProgram(code.toString(), diagnosticsManager);
      for (let [key, value] of p.transpilerImports.entries()) {
        transpilerImports.set(key, value);
      }

      return p.program.declarations;
    },
  };

  const scanner = new Scanner(input);
  const parser = new Parser(scanner, diagnosticsManager);
  const program = parser.parseProgram();

  return {
    program,
    transpilerImports,
  };
}

export interface CompilationResult {
  code: string;
  diagnostics: DiagnosticsManager;
}

export function compileCode(
  input: string,
  options?: Partial<Options>
): CompilationResult {
  const diagnosticsManager = new DiagnosticsManager();

  try {
    const { program, transpilerImports } = buildASTProgram(
      input,
      diagnosticsManager
    );

    const typeChecker = new TypeChecker(diagnosticsManager);
    const { typemap } = typeChecker.checkProgram(program);

    if (diagnosticsManager.hasErrors() || options?.compileOnly) {
      return {
        code: "",
        diagnostics: diagnosticsManager,
      };
    }

    const transpiler = new Transpiler(typemap);
    const v = transpiler.transpileProgram(program, transpilerImports, options);

    return {
      code: generate(v as any),
      diagnostics: diagnosticsManager,
    };
  } catch (e) {
    diagnosticsManager.print("input.lux");
    throw e;
  }
}

export function runCode(input: string, options?: Partial<Options>): any {
  const { code, diagnostics } = compileCode(input, options);
  if (diagnostics.hasErrors()) {
    throw new Error("Can't run code with errors");
  }
  return eval(code);
}

export function runMacro(expr: ast.Expr, ctx: CompilerContext): ast.Node[] {
  // TODO: This probably needs to support other macro statements as well
  const diagnosticsManager = new DiagnosticsManager();

  const typeChecker = new TypeChecker(diagnosticsManager);
  const { typemap } = typeChecker.checkExpr(expr);

  if (diagnosticsManager.hasErrors()) {
    diagnosticsManager.print();
    throw new Error("Errors during macro invokation"); // TODO: Resolve
  }

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
  const diagnosticsManager = new DiagnosticsManager();

  const typeChecker = new TypeChecker(diagnosticsManager);
  const { typemap } = typeChecker.checkExpr(expr);

  if (diagnosticsManager.hasErrors()) {
    diagnosticsManager.print();
    throw new Error("Errors during macro invokation"); // TODO: Resolve
  }

  const transpiler = new Transpiler(typemap);
  const v = transpiler.transpileExpr(expr);

  const code = generate(v as any);

  (function (this: CompilerContext) {
    const external = this.external.bind(null, target);
    eval(code);
  }.call(ctx));
}
