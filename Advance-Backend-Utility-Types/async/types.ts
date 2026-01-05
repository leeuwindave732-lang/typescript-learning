// Types

export type User = {
    id: number,
    email: string,
    role: "Developer" | "Production",
    isActive?: boolean
}