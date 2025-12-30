type Student = {
    name: string,
    year: number,
    grades?: number[]
}

function UpdateStudent<T extends Student>(
    student: T,
    updates: Partial<T>
): T {
    return {...student, ...updates}
}
// make the properties partial, so we can update only what we want
// we use spread operator(...), its commonly used for copying, merging, and updating
// think of it as this
// ...student → take everything inside student and copy it here
// ...updates → copy everything from updates and overwrite matching fields

const Seiju: Student = {
    name: "Seiju",
    year: 1,
    grades: [90,98,100]
}

const updated = UpdateStudent(Seiju, 
    {
        year: 2
    }
)
console.log(updated)
// { name: 'Seiju', year: 2, grades: [ 90, 98, 100 ] }

const updated1 = UpdateStudent(Seiju,
    {
        grades: [100,100,100]
    }
)
console.log(updated1)
// { name: 'Seiju', year: 1, grades: [ 100, 100, 100 ] }
