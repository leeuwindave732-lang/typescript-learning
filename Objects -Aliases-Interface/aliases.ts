// type aliases 
// when object type is reused, create type aliases


type student = {
    name: string,
    age: number,
    course: string,
    isStudent: boolean
};

// type Aliases Seiju
const Seiju: student = {
    name: "Seiju",
    age: 18,
    course: "Computer Science",
    isStudent: true
}

// type Aliases Hajime
const Hajime: student = {
    name: "Hajime", 
    age: 18,
    course: "Computer Science",
    isStudent: false
}

console.log(Seiju) // prints all the values in alias Seiju
console.log(Hajime) // print all the values in alias Hajime

/* using type aliases will ensure the reusability of the object 
making the code more efficient and cleaner */