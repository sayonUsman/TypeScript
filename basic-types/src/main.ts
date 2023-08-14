const isDeveloper: boolean = true;
const developerName: string = "Developer";
const salary: number = 120000;
const language: string[] = ["JavaScript", "Typescript", "Python"];
const experience: number[] = [1, 1, 3];
const developmentArea: {} = {
  frontEnd: "JavaScript",
  backEnd: "Python",
  fullStack: "Typescript",
};
// const intro; // any type
let postID: string | number; // union type
let isActive: boolean | number;
let password: RegExp; // Regular expression type

console.log(isDeveloper);
console.log(developerName);
console.log(salary);
console.log(language);
console.log(experience);
console.log(developmentArea);
