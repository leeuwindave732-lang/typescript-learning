// Type Inference & Template Literal Types in Practice
// this is a Mini Task Already
const roles = [
    'Admin',
    'User',
    'Developer'
]as const


type Role = typeof roles[number] // "admin" | "user" | "developer"

// Template literal types
type Permission = 
    |'Read'
    |'Code'
    |'Delete'

// Generate all possible role-permission combinations
type RolePermission = `${Role}_${Permission}`

// example

const role1:RolePermission = `Admin_Code`
console.log(role1) // output: Admin_Code
const role2: RolePermission = `User_Read`
console.log(role2) // output: User_Read
// const example3: RolePermission = 'User_Code';   Compile-time error



// Role-permission mapping
const All: Record<Role, Permission[]> = {
    Admin: ['Read', 'Delete'],
    User: ['Read'],
    Developer: ['Read', 'Code', 'Delete']
}

function hasPermission<R extends Role>(
    role: R,
    Permission: RolePermission
) {

    // optional runtime check
    const [r, p] = Permission.split('_') as [Role, Permission]

    if (r !== role) {
        throw new Error(`Permission ${Permission} does not belong to ${role}`)
    }

    if (!All[role].includes(p)) {
        throw new Error(`${role} does not have permission: ${p}`)
    }

    console.log(`${role} has permission: ${Permission}`)
}

// correct use
hasPermission('Developer', 'Developer_Code')
hasPermission('User', 'User_Read')
// compile time errors 
// hasPermission('Admin', 'Admin_Code') throw new Error(`${role} does not have permission: ${p}`)
// hasPermission(`User`,'Developer_Read') throw new Error(`Permission ${Permission} does not belong to ${role}`)

console.log(All)

