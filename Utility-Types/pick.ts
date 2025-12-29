// pick

type StudentInfo = {
    name: string,
    year: 1 | 2 | 3 | 4,
    grades: number[],
    course: string,
    subjects: string[]
}

type PickStudent = Pick<StudentInfo, 'name' | 'year'> // pick a set of properties

// in this case we only pick the name and the year from the StudentInfo
const Student: PickStudent[] = [
    {
        name: "Seiju",
        year: 1
     // grades: [100] // Error: 'grades' does not exist in type 'PickStudent'
    }
]

console.log(Student)

// basically 
// Pick = select only the properties you want.