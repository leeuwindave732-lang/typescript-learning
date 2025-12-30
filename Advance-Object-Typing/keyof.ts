// keyof

type Student = {
    name: string;
    year: number;
    grades?: number[];
};

type StudentKeys = keyof Student;
// "name" | "year" | "grades"
// Only allow strings that are actual property names of Student.


function getStudentValues(student: Student, key: StudentKeys) {
    return student[key];
}

const s: Student = {
    name: "Seiju",
    year: 1,
    grades: [99,89,99]
}

const s1: Student = {
    name: "Hajime",
    year: 2
}

console.log("s name: ", getStudentValues(s, "name")); // string
console.log("s1 name: ", getStudentValues(s1, "name")); // string
console.log("s grades: ",getStudentValues(s, "grades")); // number []
console.log("s1 grades: ", getStudentValues(s1, "grades")); // undefined


// think of it like this
// keyof Student → valid property names
// student[key] → value stored under that key
// Optional property → may return undefined
