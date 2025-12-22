const name = "Seiju";
const subjects = ["CC101 ", " CC102 ", " PL "];
const isStudent = true;

let grades: number; 
grades = (95 + 96 + 95) / 3

let randomValue: unknown = "Hello Seiju";

if(typeof randomValue === "string") {
    console.log(randomValue.toUpperCase());
}

console.log(`Students name ${name}, subjects ${subjects}, is student ${isStudent}, grades? ${grades}`)