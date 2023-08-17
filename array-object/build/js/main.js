"use strict";
//Array in TypeScript
let fruits = ["Apple", "Orange", "Pineapple", "Mango", "Banana"];
let roleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mixedData = ["Apple", 1, true];
// Tuple Types
let tupleArray = ["Apple", 1, true];
mixedData = tupleArray; // This is possible
const example = ["One", 1, true];
console.log(example);
//The cause is below
mixedData[3] = "Orange";
// tupleArray[3]= "Orange";
// Object in TypeScript
const example1 = {
    prop1: "Zero",
    prop2: 0,
    prop3: false,
};
console.log(example1);
const example2 = {
    prop1: "One",
    prop2: 1,
    prop3: true,
};
console.log(example2);
const example3 = {
    prop1: "hello",
    prop2: 1,
    prop3: true,
};
console.log(example3);
let example5 = {
    prop5: "world",
    prop6: 0,
    prop7: false,
    prop8: [true, 1, 2, 3],
};
console.log(example5);
