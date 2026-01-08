// Learn more about conditional types

// basic conditional types

type isString<T> = T extends string ? "Yes" : "No";

type test1 = isString<string> // "Yes"
type test2 = isString<number> // "No"

// conditional types with generics
type ElementType<T> = T extends (infer U)[] ? U : T;

type NumArray = number[];
type StrArray = string[];

type FirstNumType = ElementType<NumArray> // number
type FirstStrType = ElementType<StrArray> // string
type DirectionType = ElementType<boolean> // boolean

// Exclude & Extract (built-in conditional types)
type Roles = "Admin" | "User" | "Developer";

type NonAdminRoles = Exclude<Roles, "Admin">; // "User" | "Developer"
type OnlyAdmin = Extract<Roles, "Admin">; // "Admin"

// using conditional types for DTO validation
type ValidUser<T> = T extends { email: string }
    ? T["email"] extends `${string}@${string}.${string}` // email should be like this "test@gmail.com"
        ? T
        : never
    : never

type User1 = { email: "test@gmail.com", name: string} 
type User2 = { email: "InvalidEmail", name: string} 

type Valid1 = ValidUser<User1> // email: "test@gmail.com", name: string
type Valid2 = ValidUser<User2> // never

// guard for valid emails using type inference
function isValidUser<T extends { email: string }>(
    user: T
): user is ValidUser<T> {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);
}

const u1: User1 = { email: "test@gmail.com", name: "Seiju"} 
const u2: User2 = { email: "InvalidEmail", name: "Hajime"} 

if(isValidUser(u1)) {
    console.log("u1 is valid:", u1.email)
}

if(!isValidUser(u2)) {
    console.log("u2 is invalid:", u2.email)
}

/* output: 
    u1 is valid: test@gmail.com
    u2 is invalid: InvalidEmail
*/