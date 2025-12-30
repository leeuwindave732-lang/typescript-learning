type Student = {
    name?: string,
    grades?: number[]
};

type Course = {
    title: string,
    students: Student[]
};

type FirstStudent<T> = T extends { students: (infer U)[] } ? U : never

type First = FirstStudent<Course>

// hasGrades<T> is a compile-time check for whether the type has grades.
type hasGrades<T> = T extends { grades: number[] }? "true" : "false"

type CheckStudent = hasGrades<Student>
type CheckCourse = hasGrades<Course>

// getFirst → safely returns the first element of any array.
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0]
}

// calculates student average
function computeAverage<T extends { grades?: number[] }>(student: T): number {
    const grades = student.grades;
    if (!grades || grades.length === 0) return 0;
    const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;
    return parseFloat(avg.toFixed(2)) // make the decimals only 2
}


const course1: Course = {
    title: "Computer Science",
    students: [
        {
            name: "Seiju", grades: [99,100,89]
        },
        {
            name: "Hajime", grades: [80,98,78]
        }, 
        
    ]
}

const course2: Course = {
    title: "Information Technology",
    students: [
        {
            name: "Seijiro", grades: [88,88,87]
        },
        {
            name: "Jume", grades: [89,91,92]
        },
        {
            name: "Jiro"
        }
    ]
}

const course3: Course = {
    title: "Computer Engineering",
    students: [
        {
            grades: [99,88,79]
        }
    ]
}
// check if its student
function isStudent(obj: unknown): obj is Student {
    return typeof obj === "object" && obj !== null && ("grades" in obj || "name" in obj);
}

// check if its a course
function isCourse(obj: unknown): obj is Course {
    return typeof obj === "object" && obj !== null && "students" in obj && Array.isArray(obj.students)
}
function printInfo(value: unknown) {
    if (isCourse(value)) {
        // its a course 
        console.log(`Course: ${value.title}, Number of students: ${value.students.length}`); // length calculates the number of students
        console.log("-----------------")
    } else if (isStudent(value)) {
        // its a student
        const avg = computeAverage(value)
        const name = value.name ?? "Unknown"
        if ( avg === 0) {
            console.log(`Student name: ${name}, No GRADES`)
            console.log("-----------------")
        } else {
            console.log(`Student name: ${name}, Average: ${avg}`);
            console.log("-----------------")
        }
    } else {
        console.log("Unknown object type");
        console.log("-----------------")
    }
}


printInfo(course1) // Output: Course: Computer Science, Number of students: 2
printInfo(course1.students[0]) // Output: Student name: Seiju, Average: 96
printInfo(course1.students[1]) // Output: Student name: Hajime, Average: 85.33

printInfo(course2) // Output: Course: Information Technology, Number of students: 3
printInfo(course2.students[0]) // Output: Student name: Seijiro, Average: 87.67
printInfo(course2.students[1]) // Output: Student name: Jume, Average: 90.67
printInfo(course2.students[2]) // Output: Student name: Jiro, No Grades

printInfo(course3) // Output: Course: Computer Engineering, Number of students: 1
printInfo(course3.students[0]) // Output: Student name: Unknown, Average: 88.67