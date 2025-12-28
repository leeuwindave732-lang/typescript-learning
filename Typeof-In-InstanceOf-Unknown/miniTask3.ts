// using generics
interface Student<T> {
    data: T;
    success: boolean
}

enum StudentStatus {
    Active= "Active",
    Inactive= "Inactive",
    Graduated= "Graduated"
}

type StudentInfo = {
    name: string;
    year: 1 | 2 | 3 | 4;
    status: StudentStatus;
    grades?: number[];
}

type StudentCourse = {
    course: string;
    subjects?: string[];
}

type StudentInformation = StudentInfo & StudentCourse 

// check if an unknown value is a valid StudentInformation
function isStudent(obj: unknown): obj is StudentInformation  {
    if (typeof obj !== "object" || obj === null ) return false;

    const s = obj as Record<string, unknown>;

    return (
        typeof s.name === "string" &&
        typeof s.year === "number" && s.year >= 1 && s.year <= 4 &&
        Object.values(StudentStatus).includes(s.status as StudentStatus) &&
        typeof s.course === "string" 
    );
}


// calculate average grade, returns 0 if grades are missing
function computeAverage<T extends { grades?: number[] }>(student: T): number {
    const grades = student.grades;
    if (!grades || grades.length === 0) return 0;
    return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}

// logs students info if valid, else if check if theres a primitive value then log it, else log invalid student
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
        } 
        else if (
            typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean" 
        ) {
            console.log("Primitive Value Detected: ", value)
            console.log("------")
        } else {
            console.log("Invalid Student Data")
        }
    });
}

// student information data
const StudentData: unknown[] = [
    {
        name: "Seiju",
        year: 1,
        status: StudentStatus.Active,
        grades: [99, 100],
        course: "Computer Science",
        subjects: ["CC101", "CC102"]
    },
    { random: "data" },
    "just a string",
    42,
    {
        name: "Hajime",
        year: 4,
        status: StudentStatus.Graduated,
        course: "Engineering"
    },
    null,
];

handleStudent(StudentData) 


/* this is just the same with the mini task 2 but i
    added more improvements such as it will detect the
    primitive data and log it, and the enhancement in 
    typeguard */
