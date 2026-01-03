// Student
export type Student = {
    name: string,
    grades?: number[]
}

// calculate average
export function computeAverage<T extends { grades?: number[ ]}>(s: T): number {
    if(!s.grades || s.grades.length === 0) return 0 // if the student doesnt grade or the grades are 0 return 0
    const avg = s.grades.reduce((sum, g) => sum + g, 0) / s.grades.length;
    return parseFloat(avg.toFixed(2)) // decimals are 2 only
}

// check if its student

export function isStudent(obj: unknown): obj is Student {
    return typeof obj === 'object' && obj !== null && ( 'name' in obj || 'grades' in obj)
}