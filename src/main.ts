import { readFileSync } from "fs";
import yargs from "yargs";
import { compileCode } from "./lib";
import { Scanner, Token } from "./scanner";

function main() {
  const argv = yargs(process.argv.slice(2))
    .options({
      build: { type: "string", alias: "b", describe: "Build project in path" },
      run: { type: "string", alias: "r", describe: "Run project in path" },
      test: {
        describe: "Run tests",
      },
    })
    .help().argv;

  if (argv.build) {
    const input = readFileSync(argv.build);
    const code = compileCode(input.toString());
    console.log(code);
    return;
  }

  if (argv.run) {
    const input = readFileSync(argv.run);

    const scanner = new Scanner(`
    func main() {
      return this.value
    }
    `);
    while (true) {
      const token = scanner.scan();
      if (token == Token.EndOfFile) {
        break;
      }
      if (token >= Token.String) {
        console.log(`${Token[token]} ${scanner.value}`);
      } else {
        console.log(`${Token[token]}`);
      }
    }

    return;

    const { code, diagnostics } = compileCode(input.toString());

    if (diagnostics.hasErrors()) {
      diagnostics.print(argv.run);
      return;
    }

    console.log(code);
    console.log("=== RUNNING ===");
    const v = eval(code);
    console.log("> Returned:", v);
    return;
  }

  if (argv.test) {
    return;
  }
}

main();
