// basically the advanced version of keyof 

// keyof

type Student = {
    name: string;
    year: number;
    grades?: number[];
};

type StudentKeys = keyof Student;
// "name" | "year" | "grades"
// Only allow strings that are actual property names of Student.

/* instead of this
function getStudentValues(student: Student, key: StudentKeys) {
    return student[key];
}
    */

// we can use this to let the Typescript knows the exact return type per keys

function getStudentValues<K extends StudentKeys>(
    student: Student,
    key: K
): Student[K] {
    return student[key];
}

/* whats happening here? 
    K is a specific key, not just any key
    K extends StudentKeys means:
        “K must be one of "name" | "year" | "grades"”
    Student[K] means:
        “Return the value type that belongs to that exact key”
    
    this also prevents:
        getValue(student, "age"); // error (good!)

*/

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

