// Mapped + Conditional Type

type Student = {
    name: string,
    year: number,
    grades?: number[]
}

// Every property keeps its original type but can also be null.
type NullableProperties<T> = {
    [K in keyof T]: T[K] | null;
}

// You can dynamically transform all properties in a type.
type StudentNullable = NullableProperties<Student>

/*
{
    name: string | null;
    year: number | null;
    grades?: number[] | null;
}
*/

// All properties now accept null as value
const student: StudentNullable = {
    name: "Seiju",
    year: 1,
    grades: null
}

console.log(student)