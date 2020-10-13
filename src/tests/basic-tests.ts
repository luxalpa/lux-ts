import { TestFn } from "../testing";

export function basicTests(test: TestFn) {
  test(
    "basic",
    `
  
  function main() => Integer {
    return 10
  }
  
  `
  ).expect(10);
}

export function otherTests(test: TestFn) {
  test(
    "other",
    `
  
  function main() => Integer {
    return 10
  }
  
  `
  ).expect(11);
}
