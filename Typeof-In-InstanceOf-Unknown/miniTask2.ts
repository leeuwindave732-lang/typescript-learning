// using generics
interface GradesResponse<T> {
    data: T;
    success: boolean
}

enum StudentStatus {
    Active= "Active",
    Inactive= "Inactive",
    Graduated= "Graduated"
}

type StudentInfo = {
    name: string,
    year: number,
    status: StudentStatus,
    grades?: number[]
}

type StudentCourse = {
    course: string
    subjects?: string[]
}

type StudentResponse = StudentInfo & StudentCourse

// check if an unknown value is a valid StudentResponse
function isStudent(obj: unknown): obj is StudentResponse {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "name" in obj &&
        "year" in obj &&
        "status" in obj &&
        "course" in obj &&
        "subjects" in obj
    );
}

// calculate average grade, returns 0 if grades are missing
function computeAverage<T extends { grades?: number[] }>(student: T): number {
    const grades = student.grades;
    if (!grades || grades.length === 0) return 0;
    return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}

// logs students info if valid, else logs unknown
function handleStudent(values: unknown[]) {
    values.forEach((value) => {
        if(isStudent(value)) {
            console.log(`Student name: ${value.name}`);
            console.log(`Student year: ${value.year}`);
            console.log(`Student status: ${value.status}`);
            console.log(`Student average: ${computeAverage(value)}`);
            console.log(`Student course: ${value.course}`);
            console.log(`Student subjects: ${value.subjects?.join(", ") ?? "No subjects"}`);
            console.log("-----");
        } else {
            console.log("Unknown or invalid student object:", value);
            console.log("-----");
        }
    });
}

// the data of students
const response: GradesResponse<unknown[]> = {
    data: [
        {
            name: "Seiju",
            year: 1,
            status: StudentStatus.Active,
            grades: [99,98,97],
            course: "Computer Science",
            subjects: ["CC101", "CC102", "PL101"]
        },
        {}, // output: Unknown or invalid student object: {}
        "random string", // output: Unknown or invalid student object: random string
        {
            name: "Hajime",
            year: 4,
            status: StudentStatus.Inactive,
            grades: [77,79,75],
            course: "Information Technology",
            subjects: ["CP101", "DS101", "PL"]
        }
    ],

    success: true
};

handleStudent(response.data)