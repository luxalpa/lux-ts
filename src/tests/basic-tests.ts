import { TestFn } from "../testing";

export function basicTests(test: TestFn) {
  test(
    "basic",
    `function main() => Integer {
        return 10
     }`
  ).expect(10);
  test(
    "pointers",
    `function main() => Integer {
        x := 10
        y := &x
        *y = 5
        return x
     }
    `
  ).expect(5);
  test(
    "declaration-order",
    `function main() => Integer {
        stuff()
        return 1
     }
     
     function stuff() => {
        
     }
    `
  ).expect(1);
  test(
    "if-condition",
    `function main() => Integer {
        x := 10
        if x = 10 {
          return 1
        }
        return 0
     }
    `
  ).expect(1);
  test(
    "traits",
    `function main() => Integer {
        obj := <MyStruct<Integer> kind=10 value=0 />
        obj.run(5)
        return obj.value
     }
     
     struct MyStruct<T: Type> {
        kind: T
        value: Integer
     }
     
     trait Setter<T: Type> {
        run(param: T) => Void 
     }
     
     behavior MyStruct<T> for Setter<Integer> {
        run(param: Integer) => {
           this.value = param
        }
     }
    `
  ).expect(5);
}
