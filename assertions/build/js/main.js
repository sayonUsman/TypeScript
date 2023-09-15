"use strict";
//Assertion in TypeScript is a way of telling the compiler what type a variable has, without changing its value.
// covert to more and less specific types
let a = 1;
let b = a; // less specific
let c = a; // more specific
let d = a;
let e = a;
console.log(a, b, c, d, e);
