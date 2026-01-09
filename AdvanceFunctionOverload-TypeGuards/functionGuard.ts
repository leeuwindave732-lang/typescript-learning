// typeguards for complex types

type Admin = { role: "Admin"; permission: string[] };
type Developer = { role: "Developer"; stack: string[] };

function isAdmin( user: Admin | Developer ): user is Admin {
    return user.role === "Admin";
}

const users: ( Admin | Developer )[] = [
    { role: "Admin", permission: ["read" , "delete"] },
    { role: "Developer", stack: ["TS", "Java"] }
];

for (const u of users) {
    if (isAdmin(u)) {
        console.log("Admin Permissions:", u.permission)
    } else {
        console.log("Developer Stack:", u.stack)
    }
}

/* Output:
    Admin Permissions: [ 'read', 'delete' ]
    Developer Stack: [ 'TS', 'Java' ]
*/