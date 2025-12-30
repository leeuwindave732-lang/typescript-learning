// example 

type Student = {
    name: string,
    grades: number[]
};

type Course = {
    title: string,
    students: Student[]
};

type FirstStudent<T> = T extends { students: (infer U)[] } ? U : never

type First = FirstStudent<Course>

const course1: Course = {
    title: "Computer Science",
    students: [
        {
            name: "Seiju", grades: [99,100,89]
        },
        {
            name: "Hajime", grades: [80,98,78]
        }
    ]
}
const firstStudent: First = course1.students[0] ?? { name: "", grades: [] };
const secondStudent: First = course1.students[1] ?? { name: "", grades: [] };
// ?? is the nullish coalescing operator, meaning:
// “If the student exists, use it. Otherwise, use a default empty student.”
// This guarantees that firstStudent and secondStudent are always valid Student objects, even if the array is empty. 

console.log(firstStudent)
console.log(secondStudent)

console.log(course1)

/* you can also do this generic 

function firstElement<T>(arr: T[], defaultValue: T): T {
    return arr[0] ?? defaultValue;
}

const firstStudentSafe = firstElement(course1.students, { name: "", grades: [] });

*/