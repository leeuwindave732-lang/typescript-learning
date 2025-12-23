enum StudentStatus {
    Active = "Active",
    Inactive = "Inactive",
    Graduated = "Graduated"
}

interface StudentInfo {
    name: string,
    year: 1 | 2 | 3| 4,
    status: StudentStatus
    grades?: number[] // we put the optional here if we want the grades to be flexible so it dont cause errors
}

const Seiju: StudentInfo = {
    name: "Seiju",
    year: 1,
    status: StudentStatus.Active,
    grades: [99, 98, 97]
}

// computes the average of Seiju
const Seijuaverage = 
    Seiju.grades?.reduce((sum, g) => sum + g, 0)! / Seiju.grades!.length;

const Hajime: StudentInfo = {
    name: "Hajime",
    year: 4,
    status: StudentStatus.Graduated,
    grades: [96, 100, 97]
}

// computes the average of Hajime
const Hajimeaverage = 
    Hajime.grades?.reduce((sum, g) => sum + g, 0)! / Hajime.grades!.length; 


console.log(`Students name: ${Seiju.name}`) // prints Seiju
console.log(`Students year: ${Seiju.year}`) // prints the year of seiju in college
console.log(`Students status: ${Seiju.status}`) // prints the status of seiju
console.log(`Students grade: ${Seiju.grades}`) // prints Seiju's Grades
console.log(`Students average: ${Seijuaverage}`) // prints Seiju's average

console.log(`Students name: ${Hajime.name}`) // prints Hajime
console.log(`Students year: ${Hajime.year}`) // prints the year of Hajime in college
console.log(`Students status: ${Hajime.status}`) // prints the status of Hajime
console.log(`Students grade: ${Hajime.grades}`) // prints Hajime's grade
console.log(`Students average: ${Hajimeaverage}`) // prints Hajime's average