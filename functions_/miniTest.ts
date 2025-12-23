function calculateAverage (grades: number[]): number {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

function studentsINFO (
    name: string,
    course: string,
    year: number,
    subjects: string[],
    grades?: number[]
    
): void {     // use void when nothing is returned
    console.log(`name: ${name}`);
    console.log(`course: ${course}`);
    console.log(`year: ${year} year`);
    console.log(`subjects: ${subjects}`);

    if (grades) {
        console.log(`average: ${calculateAverage(grades)}`);
    }
}

// call the function "studentINFO"

studentsINFO (
    "Seiju",
    "Computer Science",
    1,
    ["CC101", "CC102", "PL"],
    [90, 95, 99]
);

