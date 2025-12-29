// partial

type StudentInfo = {
    name: string,
    year: 1 | 2 | 3 | 4,
    grades: number[],
    course: string,
    subjects: string[]
}

type OptionalStudent = Partial<StudentInfo> // make all the properties optional, 

const Student: OptionalStudent[] = [
    {
        name: "Seiju",
        grades: [100],
    }

]

console.log(Student)

