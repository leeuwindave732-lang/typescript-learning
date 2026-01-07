/* 
    A Data Transfer Object (DTO) is a design pattern used to 
    transfer data between different layers or processes in an application.
    It is particularly useful in APIs to optimize communication by bundling
    multiple data fields into a single object, reducing the number of method
    calls or network requests.
*/

import type { User } from "./user.types.js";

// DTOs protect your domain from bad data, and your controller is the security gate.

// create user
export type CreateUserDTO = {
    id: unknown;
    name: unknown;
    email: unknown;
    role: unknown;
};

// fetch user
export type ReadUserDTO = {
    id: unknown
}

// update user
export type UpdateUserDTO = {
    id: unknown;
    name?: unknown,
    email?: unknown,
    role?: unknown,
}

// delete user
export type DeleteUserDTO = {
    id: unknown
}

// create user dto
export function isCreateUserDTO( dto: CreateUserDTO): dto is User {
    return (
        typeof dto.id === "number" &&
        typeof dto.name === "string" &&
        typeof dto.email === "string" &&
        dto.email.includes("@")&& 
        (
            dto.role === "Admin" ||
            dto.role === "Developer" ||
            dto.role === "User"
        )
    )
}


// fetch user
export function isReadUserDTO( dto: ReadUserDTO ): dto is { id: number } {
    return typeof dto.id === "number";
}

// update user 
export function isUpdateUserDTO( dto: UpdateUserDTO ): dto is { id: number } & Partial<User> {
    if ( typeof dto.id !== "number" ) 
        
    if ( dto.name !== undefined && typeof dto.name !== "string") return false;
    if ( dto.email !== undefined && typeof dto.email !== "string") return false;
    if ( dto.email && !dto.email.includes("@")) return false;

    if ( 
        dto.role !== undefined &&
        dto.role !== "Admin" &&
        dto.role !== "Developer" &&
        dto.role !== "User"
    ) return false;

    return true;
        
} 


// delete user
export function isDeleteUserDTO( dto: DeleteUserDTO ): dto is { id: number } {
    return typeof dto.id === "number";
}


