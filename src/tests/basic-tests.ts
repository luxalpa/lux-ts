import { TestFn } from "../testing";

export function basicTests(test: TestFn) {
  test(
    "basic",
    `main: () => Integer {
        return 10
     }`
  ).expect(10);
  test(
    "pointers",
    `main: () => Integer {
        x := 10
        y := &x
        *y = 5
        return x
     }
    `
  ).expect(5);
  test(
    "declaration-order",
    `main: () => Integer {
        stuff()
        return 1
     }
     
     stuff: () => {
        
     }
    `
  ).expect(1);
  test(
    "if-condition",
    `main: () => Integer {
        x := 10
        if x == 10 {
          return 1
        }
        return 0
     }
    `
  ).expect(1);
  test(
    "traits",
    `main: () => Integer {
        obj := MyStruct<Integer> { 
          kind: 10
          value: 0 
        }
        obj.run(5)
        x: MyStruct<Integer> = obj
        return obj.value
     }
     
     MyStruct<T: Type>: struct {
        kind: T
        value: Integer
     }
     
     Setter<T: Type>: trait {
        run(param: T) => Void 
     }
     
     impl Setter<Integer> for MyStruct<T> {
        run(param: Integer) => {
           this.value = param
        }
     }
    `
  ).expect(5);
  test(
    "recursive-trait-definitions",
    `
    function main() => Integer {
      return 1
    }
    
    struct MyStruct<T: Type> {
      
    }
    
    trait MyTrait<T: Type> {
      fn() => MyStruct<T> 
    }
    
    struct OtherStruct {
      
    }
    
    methods OtherStruct for MyTrait<Integer> {
      fn() => MyStruct<Integer> {
        return MyStruct<Integer> {}
      }
    }
    `
  ).expect(1);
  test(
    "for-of-loops",
    `
    function main() => Integer {
        v := 0
        for x := range(1, 5) {
            v = v + x
        }
        return v
    }
    
    function range(min: Integer, max: Integer) => RangeIterator {
        return RangeIterator { value: min, max: max }
    }
    
    struct RangeIterator {
        value: Integer
        max: Integer
    }
    
    struct IteratorResult<T: Type> {
        done: Boolean
        value: T
    }
    
    trait Iterator<T: Type> {
        next() => IteratorResult<T>
    }
    
    methods RangeIterator for Iterator<Integer> {
        next() => IteratorResult<Integer> {
            if(this.value = this.max) {
                return IteratorResult<Integer> { done: true, value: this.value }
            }
    
            previous := this.value
            this.value = this.value + 1
            return IteratorResult<Integer> { done: false, value: previous }
        }
    }
    `
  ).expect(10);

  test(
    "optional-parameters",
    `
    main: () => Integer {
        return doStuff()
    }
    
    doStuff: (x: Integer = 25) => Integer {
        return x
    }
    `
  ).expect(25);

  test(
    "arrays",
    `
    main: () => Integer {
      dragons: Array<Integer> = [10, 20]
      dragons[0] = 15
      dragons[1] = 30
      return dragons[1]
    }
    `
  ).expect(30);

  test(
    "variadic-functions",
    `
    main: () => Integer {
      return stuff(1, 2, 3)
    }
    
    stuff: (...params: Array<Integer>) => Integer {
      return params[1]
    }
    `
  ).expect(2);

  test(
    "methods-on-template-structs",
    `
    struct MyStruct<T: Type> {
        value: Array<T>
    }
    methods MyStruct<T> {
        hello() => Array<T> {
            return this.value
        }
        first() => &T {
            return &this.value[0]
        }
        set(arr: Array<T>) => Boolean {
            this.value = arr
            return true
        }
        greeter() => &() => Array<T> {
            return &this.hello
        }
    }
    
    function main() => Integer {
        str := MyStruct<Integer> {
            value: [100, 200]
        }
    
        x: Array<Integer> = str.hello()
        y: &Integer = str.first()
    
        str.set([1, 2, 3])
        fn: &() => Array<Integer> = str.greeter()
    
        return x[0]
    }
    `
  ).expect(100);
}
