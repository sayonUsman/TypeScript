const add = (a: number, b: number): number => a + b; // will return number

const message = (message: string): void => {
  console.log(message);
}; // do not return anything

console.log(add(5, 6));

// function signature
let mathFunctionSignature1: (a: number, b: number) => number;

// Or
type mathFunctionSignature2 = (a: number, b: number) => number;

// or
interface mathFunctionSignature3 {
  (a: number, b: number): number;
}

const subtract: mathFunctionSignature2 = (a, b) => a - b;

console.log(subtract(25, 15));

const multiply: mathFunctionSignature3 = (a, b) => a * b;

console.log(multiply(5, 6));
