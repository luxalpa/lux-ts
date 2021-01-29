import { basicTests } from "./tests/basic-tests";
import { runCode } from "./lib";
import { isDeepStrictEqual } from "util";
import chalk from "chalk";

export type TestFn = (name: string, code: string) => ITestObject;

export class Tester {
  tests: TestObject[] = [];

  test(name: string, code: string): ITestObject {
    const obj = new TestObject(name, code);
    this.tests.push(obj);
    return obj;
  }

  runAllTests() {
    for (let [i, test] of this.tests.entries()) {
      const testNum = `[${i + 1}/${this.tests.length}]`;
      const name = chalk.bold(test.name);
      this.runTest(test);
      if (test.succeeded) {
        console.log(`${testNum} ${name} succeeded ` + chalk.green("✔️"));
      } else {
        console.log(`${testNum} ${name} failed ${chalk.red("✖️")}`);

        if (test.lastError) {
          console.error(test.lastError);
        } else {
          console.log(
            `   expected: ${JSON.stringify(
              test.expectedOutput
            )}\n   got: ${JSON.stringify(test.output)}`
          );
        }
      }
    }
  }

  runTest(test: TestObject) {
    switch (test.expectationKind) {
      case ExpectationKind.ReturnValue:
        try {
          const result = runCode(test.code, {
            generateMainStmt: true,
          });

          test.output = result;

          test.succeeded = isDeepStrictEqual(result, test.expectedOutput);
        } catch (e) {
          test.succeeded = false;
          test.lastError = e;
        }
        break;
    }
  }
}

enum ExpectationKind {
  ReturnValue,
  Error,
  Code,
}

export interface ITestObject {
  expect(output: any): void;
}

export class TestObject implements ITestObject {
  expectedOutput: any;
  expectationKind: ExpectationKind;
  succeeded: boolean;
  output: any;
  lastError: Error;
  constructor(public name: string, public code: string) {}
  expect(output: any) {
    this.expectationKind = ExpectationKind.ReturnValue;
    this.expectedOutput = output;
  }
}

export type TestUnit = (test: TestFn) => void;

export function TestProgram(units: TestUnit[]) {
  const tester = new Tester();

  for (let unit of units) {
    unit(tester.test.bind(tester));
  }

  tester.runAllTests();
}

TestProgram([basicTests]);
