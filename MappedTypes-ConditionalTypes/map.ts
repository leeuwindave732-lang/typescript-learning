// Mapped Type

type Student = {
    name: string,
    year: number,
    grades?: number[]
}

// make the values in property optional
type PartialStudent = {
    [K in keyof Student]?: Student[K]
}

// make the values in property required
type RequiredStudent = {
    [K in keyof Student]-?: Student[K]
}

const Student1: PartialStudent = {
    name: "Seiju"
}

const Student2: RequiredStudent = {
    name: "Hajime",
    year: 2,
    grades: [90,89,99]
}

console.log(Student1)
console.log(Student2)