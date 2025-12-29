// readonly

// think readonly as view-only, meaning we cant change anything
type StudentInfo = {
    name: string,
    year: 1 | 2 | 3 | 4,
    grades: number[],
    course: string,
    subjects: string[]
}

type ReadStudent = Readonly<StudentInfo> // make all the properties in T readonly


const Student: ReadStudent[] = [
    {
        name: "Seiju",
        year: 1,
        grades: [100, 99, 98],
        course: "Computer Science",
        subjects: ["CC101", "CC102"]
    }

]
console.log(Student)

/* makes all of its properties immutable. That means once you assign values to the object, you cannot change them.

Student[0].name = "Alex"; // Error: Cannot assign to 'name' because it is a read-only property
Student[0].grades.push(100); // Error: 'grades' is read-only too

TypeScript will prevent you from modifying anything, making your objects safe from accidental changes.

*/