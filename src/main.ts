import { readFileSync } from "fs";
import yargs from "yargs";
import { compileCode } from "./lib";

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
