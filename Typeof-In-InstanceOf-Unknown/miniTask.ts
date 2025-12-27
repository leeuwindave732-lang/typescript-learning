// functions that accept unknown

enum StudentStatus {
    Active= "Active",
    Inactive= "Inactive",
    Graduated= "Graduated"
}

type StudentInfo = {
    name: string,
    year: 1 | 2 | 3 | 4,
    status: StudentStatus,
    grades?: number[]
}

type StudentCourse = {
    course: string,
    subjects: string[]
}

type StudentResponse = StudentInfo & StudentCourse

function computeAverage(student: { grades?: number[] }): number {
    const grades = student.grades
    if (!grades ||  grades.length === 0 ) return 0;
    return grades.reduce((sum, g) => sum + g, 0) / grades.length
}


function UnknownStudent (value: unknown) {
    if (typeof value === "string") {
        // If value is a string, convert it to uppercase and log it
        console.log(value.toUpperCase());
    }
    else if (typeof value === "boolean") {
        // else if the value is a boolean, log it
        console.log(value)
    }
    else if (typeof value === "number") {
        // else if value is a number, format it to 2 decimal places and log it
        console.log(value.toFixed(2))
    }
    else if (typeof value === "object" && value !== null)
        if ("name" in value) {
            const student = value as StudentResponse
            console.log(`Student name: ${student.name}`)
            console.log(`Student year: ${student.year}`)
            console.log(`Student status: ${student.status}`)
            console.log(`Student average: ${computeAverage(student)}`)
            console.log(`Student course: ${student.course}`)
            console.log(`Student subjects: ${student.subjects}`)
        } else {
            console.log("Unknown object")
        }
    else {
        // else if the type is not there or unknown, log unknown type
        console.log("unknown type")
    }
}

UnknownStudent("Seiju")
UnknownStudent(false)
UnknownStudent(99.8975)
UnknownStudent({
    name: "Seiju",
    year: 1,
    status: StudentStatus.Active,
    grades: [99, 99, 100],
    course: "Computer Science",
    subjects: ["CC101", "CC102", "PL101"]
})
UnknownStudent({})