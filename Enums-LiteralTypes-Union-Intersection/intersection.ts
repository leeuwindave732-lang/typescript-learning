// Intersection Types (&)
// combine multiple types into one

type Student = {
    name: string
};

type Grades = {
    grades?: number
};

type Age = {
    age?: number
}

type CollegeStudent = Student & Grades & Age; // uses the "&" for intersection

// uses type aliases for reusability
const Seiju: CollegeStudent = {
    name: "Seiju",
    grades: 99,
}

const Hajime: CollegeStudent = {
    name: "Hajime",
    age: 18
}

console.log(`Students name: ${Seiju.name}`);
console.log(`Students grade: ${Seiju.grades}`);
console.log(`Students age: ${Seiju.age}`) // the age here are undefined since we didnt put the age
console.log(`Students name: ${Hajime.name}`);
console.log(`Students grade: ${Hajime.grades}`); // the grades here are undefined since we didnt put the grades
console.log(`Students age: ${Hajime.age}`)

// use intersection only if you want to combine features