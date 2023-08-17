//Array in TypeScript
let fruits: string[] = ["Apple", "Orange", "Pineapple", "Mango", "Banana"];
let roleNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mixedData = ["Apple", 1, true];

// Tuple Types
let tupleArray: [string, number, boolean] = ["Apple", 1, true];
mixedData = tupleArray; // This is possible
// tupleArray = mixedData // This is not possible

// making reusable and more readable using type keyword
type exampleArray = [string, number, boolean];
const example: exampleArray = ["One", 1, true];
console.log(example);

//The cause is below
mixedData[3] = "Orange";
// tupleArray[3]= "Orange";

// Object in TypeScript
const example1: { prop1: string; prop2: number; prop3: boolean } = {
  prop1: "Zero",
  prop2: 0,
  prop3: false,
};

console.log(example1);

const example2: { prop1: string; prop2: number; prop3: boolean } = {
  prop1: "One",
  prop2: 1,
  prop3: true,
};

console.log(example2);

// making reusable and more readable using type keyword
type exampleObject = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4?: (number | string)[]; // This is optional
};

const example3: exampleObject = {
  prop1: "hello",
  prop2: 1,
  prop3: true,
};

console.log(example3);

// making reusable and more readable using interface keyword
interface exampleObject2 {
  prop5: string;
  prop6: number;
  prop7: boolean;
  prop8?: (number | boolean)[]; // This is optional
}

let example5: exampleObject2 = {
  prop5: "world",
  prop6: 0,
  prop7: false,
  prop8: [true, 1, 2, 3],
};

console.log(example5);
