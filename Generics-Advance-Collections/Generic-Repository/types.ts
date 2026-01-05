// types

export type User = {
    id: number,
    name: string,
    email: string,
    role: "Admin" | "Developer"  | "User"
}

export type Student = {
    id: number,
    name: string,
    grades: number[],
    course: string
}

