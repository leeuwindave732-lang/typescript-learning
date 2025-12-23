interface Student {
    name: string,
    grades?: number[],
    subjects: readonly string[],
}

const Seiju: Student = {
    name: "Seiju",
    grades: [99, 98, 100],
    subjects: ["CC101", "CC102", "PL" ]

};

// compute the average of Seiju
const Seijuaverage = 
    Seiju.grades?.reduce((sum, g) => sum + g, 0)! / Seiju.grades!.length;

const Hajime: Student = {
    name: "Hajime",
    grades: [99, 98], // since the grades is optional, we can put 2 or none
    subjects: ["CC101", "CC102", "PL" ]
};

// compute the average of Hajime
const Hajimeaverage = 
    Hajime.grades?.reduce((sum, g) => sum + g, 0)! / Hajime.grades!.length; 
    // since theres only 2 grades in hajime it will only divided by 2

console.log(`Students name: ${Seiju.name}`) // prints Seiju
console.log(`Students grade: ${Seiju.grades}`) // prints Seiju's Grades
console.log(`Students subjects: ${Seiju.subjects.join(",")}`) // prints Seiju's Subjects
console.log(`Students average: ${Seijuaverage}`) // prints Seiju's average

console.log(`Students name: ${Hajime.name}`) // prints Hajime
console.log(`Students grade: ${Hajime.grades}`) // prints Hajime's grade
console.log(`Students subjects: ${Hajime.subjects.join(",")}`) // prints Hajime's Subjects
console.log(`Students average: ${Hajimeaverage}`) // prints Hajime's average
