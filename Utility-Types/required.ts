// required 

type StudentInfo = {
    name: string,
    year: 1 | 2 | 3 | 4,
    grades: number[],
    course: string,
    subjects: string[]
}

type RequiredStudents = Required<StudentInfo> // the required is the opposite of partial, since we need all the properties

const Student: RequiredStudents[] = [
    {
        name: "Seiju",
        year: 1,
        grades: [100, 99, 98],
        course: "Computer Science",
        subjects: ["CC101", "CC102"]
    }

]

// Basically we need to put values in all the properties in StudentInfo

console.log(Student)