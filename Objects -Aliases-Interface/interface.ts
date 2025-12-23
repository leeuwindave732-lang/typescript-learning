// interface
// interface are similar to type aliases but more extendable

interface studentInfo {
    name: string,
    age: number,
    course: string,
    nickname?: string
}

const Seiju: studentInfo = {
    name: "Seiju",
    age: 18,
    course: "Computer Science"
};

const Hajime: studentInfo = {
    name: "Hajime",
    age: 18,
    course: "Computer Science",
    nickname: "haji"
};

// added the graduationYear using the "extends"
interface Graduates extends studentInfo {
    graduationYear: number
}

const grad: Graduates = {
    name: "Seiju",
    age: 18,
    course: "Computer Science",
    graduationYear: 2029
}

const grad1: Graduates = {
    name: "Hajime",
    age: 18,
    course: "Computer Science",
    nickname: "Haji",
    graduationYear: 2029
}


console.log(Seiju) // prints the student info of Seiju
console.log(Hajime) // prints the student info of Hajime
console.log(grad) // prints the extended version of student info of Seiju(graduationYear)
console.log(grad1) // prints the extended version of student info of Hajime(graduationYear)

// here are common mistakes overall (objects, aliases, interface)

/*  using untyped objects
    const student = { name: "Seiju", age: 18} // "any" type, not recommended

    forgetting optional
    type student = { name: string, age: number, nickname: string} // forgot the optional "?"
    const seiju: student = { name : "Seiju", age: 18 } // this will be error as there will be missing type
*/

    

