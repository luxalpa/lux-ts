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
        obj := MyStruct<Integer> { 
          kind: 10
          value: 0 
        }
        obj.run(5)
        x: MyStruct<Integer> = obj
        return obj.value
     }
     
     struct MyStruct<T: Type> {
        kind: T
        value: Integer
     }
     
     trait Setter<T: Type> {
        run(param: T) => Void 
     }
     
     methods MyStruct<T> for Setter<Integer> {
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
    "Optional Parameters",
    `
    function main() => Integer {
        return doStuff()
    }
    
    function doStuff(x: Integer = 25) => Integer {
        return x
    }
    `
  ).expect(25);

  test(
    "Arrays",
    `
    function main() => Integer {
      dragons: Array<Array<String>> = [["300", "1"]]
      return 10
    }
    `
  ).expect(10);
}
