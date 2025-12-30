type Student = {
    name: string;
    year: number;
    grades?: number[];
};

function logProperty<T, K extends keyof T>(
    obj: T,
    key: K
) {
    console.log(key, obj[key]);
}

type ValueOf<T> = T[keyof T];
type StudentValues = ValueOf<Student>;

const student: Student = {
    name: "Seiju",
    year: 1,
    grades: [99,89,100]
}
logProperty(student, "name");
logProperty(student, "year");

const student1: StudentValues = "Seiju"
const student2: StudentValues = 1
const student3: StudentValues = [99, 100, 89]

console.log(student1)
console.log(student2)
console.log(student3)



