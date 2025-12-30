// indexed accessed types

type Student = {
    name: string;
    year: number;
    grades?: number[];
};

type StudentNameType = Student["name"]; // string
type StudentGradesType = Student["grades"]; // number[] | undefined



const myName: StudentNameType = "Seiju";  
const myGrades: StudentGradesType = [99, 88];  
const noGrades: StudentGradesType = undefined;  

console.log(myName) // Seiju
console.log(myGrades) // [99, 88]
console.log(noGrades) // undefined