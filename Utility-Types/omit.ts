// omit

type StudentInfo = {
    name: string,
    year: 1 | 2 | 3 | 4,
    grades: number[],
    course: string,
    subjects: string[]
}

type OmitStudent = Omit<StudentInfo, 'grades'> // We will put values in properties besides the grades

const Student: OmitStudent[] = [
    {
        name: "Seiju",
        year: 1,
        // grades: [100, 99, 98], // Error: 'grades' does not exist in type 'OmitStudent'
        course: "Computer Science",
        subjects: ["CC101", "CC102"]
    }

]
console.log(Student)

// basically 
// Omit = remove the properties you don’t want.