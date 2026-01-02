// type safe mappings

type Role = "admin" | "editor" | "viewer";
type Permission = "read" | "write" | "delete";

// const rolePermissions: Record<Role, string[]> = { ... } This object must have exactly one key for every Role, and each value must be string[].
const rolePermissions: Record<Role, Permission[]> = {
    admin: ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"],
};

/* you can also use this with satisfies 
    const rolePermissions = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"],
} satisfies Record<Role, string[]>;

    Why this is better
    Keeps literal types ("read" instead of string)
    Still enforces exhaustiveness
    Prevents accidental widening
*/

console.log(rolePermissions)