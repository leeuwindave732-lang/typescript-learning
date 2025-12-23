const name = "Seiju Hajime"

const grades: number[] = [100,99,89]; // grades

const subjects: readonly string[] = ["CC101", "CC102", "PL"] // subjects

const student: [string, boolean, number] = [name, true, 18] // student info

const average = 
grades.reduce((sum, grade) => sum + grade, 0) / grades.length // divides the number by their length which is 3

console.log(`student: ${student[0]}`) // prints the name
console.log(`students age: ${student[2]}`) // prints the age
console.log(`is student: ${student[1]}`) // check if the students are currently enrolled
console.log(`student subjects: ${subjects.join(",")}`) // prints the subjects
console.log(`students average: ${average}`) // prints the average which are sum/grades.length