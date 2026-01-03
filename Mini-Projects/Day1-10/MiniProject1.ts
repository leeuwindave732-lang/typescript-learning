// Day 1 - 10 mini project
// Project: Student Manager Console App

/* Requirements:

    Add student info (name, year, grades, courses, subjects)
    Validate student objects (type guards + assertions)
    Compute average grades
    Print summaries in the console
    Handle invalid or missing data gracefully  
    Compute class average

*/

enum StudentStatus {
    Active= "Active",
    Inactive= "Inactive",
    Graduated= "Graduated"
}

type StudentInfo = {
    name: string,
    year?: 1 | 2 | 3 | 4,
    status: StudentStatus,
    grades?: number[],
    course: string,
    subjects?: string[]
}

function assertStudents(value: unknown): asserts value is StudentInfo {
    // signals an error whenever StudentInfo receives something that is not an object
    if (typeof value !== "object" || value === null) {
        throw new Error("not an object");
    }

    const v = value as Record<string,unknown>;
    // if the name doesnt have the "name:" and just "Seiju" it will signal an error
    if (typeof v.name !== "string") {
        throw new Error("Invalid or missing name");
    }
    // if the year is not in the union of years we put it will signal error
    if (v.year !== undefined &&(typeof v.year !== "number" || ![1,2,3,4].includes(v.year))) {
        throw new Error("Invalid year")
    }
    // if the status is not a string it will signal an error
    if (typeof v.status !== "string") {
        throw new Error("Invalid or missing status");
    }

    if ( v.grades !== undefined) {
        // if grades is not an array of number it will signal the error
        if (
            !Array.isArray(v.grades) ||
            !v.grades.every(g => typeof g === "number")
        ) {
            throw new Error("grades must be an array of number");
        }
    }

    // if the course is not a string it will signal an error
    if (typeof v.course !== "string") {
        throw new Error("Invalid or missing course");
    }

    if ( v.subjects !== undefined) {
        // if grades is not an array of number it will signal the error
        if (
            !Array.isArray(v.subjects) ||
            !v.subjects.every(g => typeof g === "string")
        ) {
            throw new Error("Subjects must be an array of string");
        }
    }
}


function computeAverage(grades?: number[]): number {
    if (!grades || grades.length === 0) return 0;
    return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}

function computeClassAverage(Student: StudentInfo[]): number {
    const allGrades = Student.flatMap(s => s.grades ?? [])
    if (allGrades.length === 0) return 0;
    return allGrades.reduce((sum, g) => sum + g, 0) / allGrades.length;
}



function PrintStudent (value: unknown) {
    // handle the failure
    try {
        assertStudents(value)

        console.log(`Students name: ${value.name}`)
        console.log(`Students year: ${value.year ?? "N/A"}`)
        console.log(`Student status: ${value.status}`)
        console.log(`Students average: ${computeAverage(value.grades)}`)
        console.log(`Students course: ${value.course}`)
        console.log(`Student subjects: ${value.subjects?.join(",") ?? "None"} `)
        console.log("-------------------")
    } catch (err) {
        console.log((err as Error).message) // this will log the throw error we put
    }
}

const students: StudentInfo[] = [
    {
        name: "Seiju",
        year: 1,
        status: StudentStatus.Active,
        grades: [99, 98, 100],
        course: "Computer Science",
        subjects: ["CC101", "CC102", "PL101"]
    },
    {
        name: "Hajime",
        year: 2,
        status: StudentStatus.Inactive,
        course: "Information Technology"
    },
    {
        name: "Seiji",
        status: StudentStatus.Graduated,
        course: "Computer Science"
    },

];

students.forEach(student => PrintStudent(student));
const classAvg = computeClassAverage(students);
console.log(`Class Average: ${classAvg.toFixed(2)}`); 
console.log("-------------------");



PrintStudent("Invalid") // not an object
PrintStudent({year: 2}) // missing name
PrintStudent({name: "Test", year: 9
}) // invalid  year
PrintStudent({subjects: "CC101"}) // subject must be an array of string