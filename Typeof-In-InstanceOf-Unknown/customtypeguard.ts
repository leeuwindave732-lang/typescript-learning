// custom type guards

interface Student {
    name: string,
    grades?: number[]
}

// custom type guard
function StudentGrades(student:Student): student is Student & { grades: number [] } {
    return Array.isArray(student.grades)
}

const student1: Student = { name: "Seiju", grades: [99, 98, 100]};
const student2: Student = { name: "Hajime"};

// check if student1 have grades or not
if (StudentGrades(student1)) {
    console.log(`Student grades: ${student1.grades}`) // print the student1 grades
}
else {
    console.log("No grades") // if the student don't have grades it will print "No grades"
}

// check if student2 have grades or not
if (StudentGrades(student2)) {
    console.log(`Student grades: ${student2.grades}`) // print the student2 grades
}
else {
    console.log("No grades") // if the student don't have grades it will print "No grades"
}