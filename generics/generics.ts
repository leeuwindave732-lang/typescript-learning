// generics 

/* function StudentInfo<Target>(value: Target): Target {
    return value;
}

StudentInfo<string>("Seiju");
StudentInfo<number>(18); */

/* array

    function StudentInfo<Target>(arr: Target): Target {
    return  arr[0]
}

StudentInfo<string>(["A", "B", "C"]);
StudentInfo<number>([1,2,3]);

*/


// interface

interface GradesResponse<T> {
    data: T;
    success: boolean
}

interface StudentInfo {
    name: string,
    year: number,
    status: StudentStatus,
    grades?: number[]
}

enum StudentStatus {
    Active= "Active",
    Inactive= "Inactive",
    Graduated= "Graduated"
}

const StudentResponse: GradesResponse<StudentInfo> = {
    data: {
        name: "Seju",
        year: 1,
        status: StudentStatus.Active,
        grades: [99,98]
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

