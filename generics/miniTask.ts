interface GradesResponse<T> {
    data: T;
    success: boolean
}

type StudentInfo = {
    name: string,
    year: 1 | 2 | 3 | 4,
    status: StudentStatus,
    grades?: number[]
}

type StudentCourse = {
    course: string
    subjects?: string[]
}

enum StudentStatus {
    Active= "Active",
    Inactive= "Inactive",
    Graduated= "Graduated"
}

type Student = StudentInfo & StudentCourse

const StudentResponse: GradesResponse<Student> = {
    data: {
        name: "Seju",
        year: 1,
        status: StudentStatus.Active,
        grades: [99,98],
        course: "Computer Science",
        subjects: ["CC101", "CC102", "PL101"]
    },

    success: true
}

function StudentAverage<T extends { grades?: number[] } > (Student: T): number {
    const grades = Student.grades;
    
    // check the how many grades are there
    if (!grades ||  grades.length === 0 ) {
        return 0;
    }
    
    // will divide the total with how many grades are there
    const total = grades.reduce((sum, g) => sum + g, 0 );
    return total / grades.length;
}

// compute the students average grade using the students data
const avg = StudentAverage(StudentResponse.data)

console.log(StudentResponse)
console.log(avg)