import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';

import {LuxLexer} from "../parser-ts/LuxLexer";
import {LuxParser} from "../parser-ts/LuxParser";
import {ParseTreeVisitor} from "./parseTreeVisitor";
import {generate} from 'astring'
import {Transpiler} from "./transpiler";
import * as fs from "fs"
import {TypeChecker} from "./typechecker";

let input = fs.readFileSync("./input.lux");
let inputStream = new ANTLRInputStream(input.toString());
let lexer = new LuxLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new LuxParser(tokenStream) as any;
parser.buildParseTrees = true;
try {
    let tree = parser.program();

    let visitor = new ParseTreeVisitor();
    let node = tree.accept(visitor);

    let typeChecker = new TypeChecker(node);
    let types = typeChecker.check();

    let transpiler = new Transpiler(types);
    let v = transpiler.transpile(node);

    let code = generate(v);

    console.log(code);
    (function () {
        function log(text) {
            console.log(text);
        }

        eval(code + "; main();");
    })();
} catch (e) {
    console.error(e);
}
