// roles
export const roles = ['Admin' , 'User', 'Developer'] as const; // make the literal types not just string
export type Role = typeof roles[number];

export type Permission = 'Read' | 'Code' | 'Delete'
export type RolePermission = `${Role}_${Permission}` // template literal

// defines which permissions each role actually has.
export const RoleMatrix = {
    Admin: ['Read', 'Delete'],
    User: ['Read'],
    Developer: ['Read', 'Code', 'Delete']
} satisfies Record<Role, Permission[]> 

