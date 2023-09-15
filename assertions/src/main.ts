//Assertion in TypeScript is a way of telling the compiler what type a variable has, without changing its value.

// covert to more and less specific types
let a: unknown = 1;
let b = a as string; // less specific
let c = a as boolean; // more specific

let d = <string>a;
let e = <string | number>a;

console.log(a, b, c, d, e);
