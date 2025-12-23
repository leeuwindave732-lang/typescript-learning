// objects 

const student: { name: string, age: number, course: string, isStudent: boolean} = {
    name: "Seiju",
    age: 18,
    course: "Computer Science",
    isStudent: true
}

console.log(student.name) // prints the student name
console.log(student.age) // prints the students age
console.log(student.course) // prints the students course
console.log(student.isStudent) // check if the student is enrolled or not and print

// each property has a type
// you can access each by doing the Dot notation

//some properties may not always exist so use ?

//for example 

const studentInfo: { name : string, age: number, nickname?: string} = {
    name: "Seiju",
    age: 18
}

console.log(studentInfo.nickname) // this will print undefined since we dont put value in the nickname
// this will ensure the error on the property missing