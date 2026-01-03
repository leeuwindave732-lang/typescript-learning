// Goal: Use TypeScript’s type system to compute rules, enforce logic, and reject invalid states at compile time

// Role -> Permission Logic( No runtime )


type Role = 'Admin' | 'User' | 'Developer'
type Permission = 'Read' | 'Code' | 'Delete'

type RolePermission = {
    Admin: 'Read' | 'Delete'
    User: 'Read'
    Developer: 'Read' | 'Code' | 'Delete'
}

// core logic type

type hasPermission<
    R extends Role,
    P extends Permission
> =
    P extends RolePermission[R]
        ? true
        : never

type User1 = hasPermission<'Admin', 'Read'> // true
type User2 = hasPermission<'User', 'Read'> // true
type User3 = hasPermission<'Admin', 'Code'> // never | 'Code' is not in RolePermission['Admin']

// Enforce Permission at Function Level

function access<R extends Role>(
    role: R,
    permission: RolePermission[R] 
) {
    console.log(`${role} can ${permission}`);
}

access('Admin', 'Delete') // Admin can Delete
access('User', 'Read') // User can Read
// access('Admin', 'Code')  // Error: Type '"Code"' is not assignable to type '"Read" | "Delete"'

// Exhaustiveness Checking ( No ESC )

type Status = 'Loading' | 'Success' | 'Error'

function handleStatus(status: Status) {
    switch(status) {
        case 'Loading':
            return 'Loading...'
        case 'Success':
            return 'Sucess...'
        case 'Error':
            return 'Error...'
        default:
            const _exhaustive: never = status
            throw new Error(`Unexpected Value`)
    }
}