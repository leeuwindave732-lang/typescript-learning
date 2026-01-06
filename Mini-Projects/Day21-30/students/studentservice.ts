// student service

import type { Student } from "./studenttype.js";
import type { Result } from "../core/result.js";

// student error
export type StudentError = 
    | "NO_GRADES"
    | "INVALID_GRADES"
    | "sTUDENT NOT FOUND"

// compute average

export function computeAverage(student: Student): Result<number, StudentError> {

    if (student.grades.length === 0) {
        return { ok: false, error: "NO_GRADES"};
    }

    if (student.grades.some(g=> g < 0 || g > 100)) {
        return { ok: false, error: "INVALID_GRADES"};
    }

    const avg = student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;

    return { ok: true, value: avg}; 
}

// Student Status

export function getStudentStatus ( avg: number ): "PASS" | "FAIL" | "HONOR" {

    if (avg >= 90) return "HONOR"
    if (avg >= 75) return "PASS"
    return "FAIL"
}

// Student summary

export function StudentSummary ( student: Student ): Result<String, StudentError> {

    const avgResult = computeAverage(student);
    if(!avgResult.ok) return avgResult;

    const status = getStudentStatus (avgResult.value)

    return {
        ok: true,
        value: `
        Student: ${student.name}
        Student ID: ${student.id}
        Student Year: ${student.year}
        Student Avg: ${avgResult.value.toFixed(2)}
        Student Status: ${status}       
        `.trim()
    }
}