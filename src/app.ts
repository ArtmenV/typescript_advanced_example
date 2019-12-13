// http://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options

class Person {
  constructor(private name: string) {}
}

const max = new Person("Maxim");

// Demo comment

// const btn = document.querySelector('#btn')!
//
// btn.addEventListener('click', () => {
//   console.log('Btn clicked!')
// })

// =======

let anyFlag;

const globalVar = "Message";

function logInfo(data: string, _?: number) {
  // const message = 'String'
  console.log(data);
  anyFlag = true;
  console.log(anyFlag);
}

logInfo("I am log string");

function multiple(a: number, b: number) {
  if (a && b) {
    return a * b;
  }
  return;
}

// interface GreetingSettings {
//   greeting: string;
//   duration?: number;
//   color?: string;
// }

// declare function greet(setting: GreetingSettings): void;

// declare namespace GreetingLib.Options {
//   // Refer to via GreetingLib.Options.Log
//   interface Log {
//     verbose?: boolean;
//   }
//   interface Alert {
//     modal: boolean;
//     title?: string;
//     color?: string;
//   }
// }

// const myGreeter = new Greeter("hello, world");
// myGreeter.greeting = "howdy";
// myGreeter.showGreeting();

// class SpecialGreeter extends Greeter {
//   constructor() {
//     super("Very special greetings");
//   }
// }

// function f() {
//   console.log("f(): evaluated");
//   return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("f(): called");
//   };
// }

// function g() {
//   console.log("g(): evaluated");
//   return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("g(): called");
//   };
// }

// class C {
//   @f()
//   @g()
//   method() {}
// }

// function classDecorator<T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   return class extends constructor {
//     newProperty = "new property";
//     hello = "override";
//   };
// }

// @classDecorator
// class Greeter {
//   property = "property";
//   hello: string;
//   constructor(m: string) {
//     this.hello = m;
//   }
// }

// console.log(new Greeter("world"));

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}

import "reflect-metadata";

const requiredMetadataKey = Symbol("required");

function required(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  let existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    requiredMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey
  );
}

function validate(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>
) {
  let method = descriptor.value;
  descriptor.value = function() {
    let requiredParameters: number[] = Reflect.getOwnMetadata(
      requiredMetadataKey,
      target,
      propertyName
    );
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (
          parameterIndex >= arguments.length ||
          arguments[parameterIndex] === undefined
        ) {
          throw new Error("Missing required argument.");
        }
      }
    }

    return method.apply(this, arguments);
  };
}
