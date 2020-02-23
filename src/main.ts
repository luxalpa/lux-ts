import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';

import {LuxLexer} from "../parser-ts/LuxLexer";
import {LuxParser} from "../parser-ts/LuxParser";
import {ParseTreeVisitor} from "./parseTreeVisitor";

import {generate} from 'astring'
import {Transpiler} from "./transpiler";
import * as fs from "fs"
import {TypeChecker} from "./typechecker";

const input = fs.readFileSync("./input.lux");
const inputStream = new ANTLRInputStream(input.toString());
const lexer = new LuxLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new LuxParser(tokenStream) as any;
parser.buildParseTrees = true;
try {
    const tree = parser.program();

    const visitor = new ParseTreeVisitor();
    const node = tree.accept(visitor);

    const typeChecker = new TypeChecker(node);
    const {typemap, usedClasses, fnOverloadInfos} = typeChecker.check();

    const transpiler = new Transpiler(typemap, usedClasses, fnOverloadInfos);
    const v = transpiler.transpile(node);

    const code = generate(v);

    console.log(code);
    (function () {
        function log(text: string) {
            console.log(text);
        }

         eval(code + "; main();");
    })();
} catch (e) {
    console.error(e);
}
