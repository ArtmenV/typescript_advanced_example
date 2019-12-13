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

const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();

class SpecialGreeter extends Greeter {
  constructor() {
    super("Very special greetings");
  }
}

function f() {
  console.log("f(): evaluated");
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
  };
}

function g() {
  console.log("g(): evaluated");
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called");
  };
}

class C {
  @f()
  @g()
  method() {}
}
