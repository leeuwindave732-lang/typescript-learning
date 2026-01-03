import type { Role } from "./roles.js";

// User
export type User = {
    name: string,
    email: string,
    age?: number,
    role: Role, // from role.ts
    grades?: number[]
}

export type PartialUser = Partial<User> // Option Properties in user
export type ReadonlyUser = Readonly<PartialUser> // Make the user Immutable
export type PickUser = Pick<User, 'role'> // From User Pick role only
export type RecordUser = Record<string, User> // define object from User

// update the object
export function UpdateObject<T extends object, K extends keyof T>(obj: T, key: K, value: T[K]): T{
    return {...obj, [key]: value}
}

//  check if its User
export function isUser(obj: unknown): obj is User {
    return typeof obj === "object" && obj !== null && 'role' in obj && 'name' in obj
}