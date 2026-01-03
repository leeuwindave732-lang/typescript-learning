// roles

export const roles = ['Admin' , 'User', 'Developer'] as const; // make the literal types not just string
export type Role = typeof roles[number];

export type Permission = 'Read' | 'Code' | 'Delete'
export type RolePermission = `${Role}_${Permission}` // template literal

// defines which permissions each role actually has.
export const RoleMap: Record<Role, Permission[]> = {
    Admin: ['Read', 'Delete'],
    User: ['Read'],
    Developer: ['Read', 'Code', 'Delete']
}

// runtime check to ensure the role actually has that permission
export function hasPermission<R extends Role>(role: R, perm: RolePermission) {
    const [r, p] = perm.split('_') as [Role, Permission]
    if (r !== role) // if the perm does not belong to the role
        throw new Error(`Permission: ${perm} does not belong to ${role}`)

    if (!RoleMap[role].includes(p))  // if the role does not have that permission
        throw new Error(`${role} does not have permission: ${p}`)

    console.log(`${role} has permission: ${perm}`)
}