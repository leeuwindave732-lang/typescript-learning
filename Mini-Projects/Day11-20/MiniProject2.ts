// Day 11 - 20 Mini Project
// TypeSafe Student & Role Manager

/* Requirements:

    Model users and students with strong TypeScript types
    Manage roles and permissions using template literal types
    Validate role-permission combinations at compile time
    Use utility types (Partial, Pick, Readonly, Record)
    Implement type guards and assertion functions
    Enforce config rules using conditional types
    Organize code using modules (import / export)
    Log results and validation outcomes in the console

*/

import  { hasPermission } from './roles.js' // function hasPermission from roles.ts
import { roles, type RolePermission } from './roles.js' // type roles and RolePermission from roles.ts
import { UpdateObject, isUser } from './user.js' // function UpdateObject and isUser from user.ts
import type { User } from './user.js' // type User from user.ts
import { computeAverage, isStudent } from './student.js' // function computeAverage and isStudent from student.ts
import type { Student } from './student.js' // type Student from student.ts
import type { Config, ConfigValidator } from './config.js' // type Config and ConfigValidator from config.ts

// Users

const users: User[] = [
    {
        name: "Seiju",
        role: "Admin",
        grades: [99,98,100],
        email: "Seiju@gmail.com"
    },
    {
        name: "Hajime",
        role: "User",
        grades: [99,100,100],
        age: 18,
        email: "Hajime@gmail.com"
    },
    {
        name: "Jiro",
        role: "Developer",
        grades: [100,100,100],
        age: 18,
        email: "Jiro@gmail.com"
    }
]

users.forEach(u => {
    console.log(`User: ${u.name}, Role: ${u.role}`)
    if(isStudent(u)) console.log(`Average grade: ${computeAverage(u)}`) // if the student has grades
})

// calculate average grades for each roles
roles.forEach(role => {
    const usersInRole = users.filter(u => u.role === role);
    const avgGrade =
        usersInRole.reduce((sum, u) => sum + (computeAverage(u) || 0), 0) /
        (usersInRole.length || 1);

    console.log(
        `Role: ${role}, Users: ${usersInRole.length}, Average Grade: ${avgGrade.toFixed(2)}`
    );
});


// permissions
hasPermission("Developer", "Developer_Code")

// Config
const Config1: ConfigValidator<{ timeout: 10, retry: 3, verbose: false }> = { timeout: 10, retry: 3, verbose: false }
console.log(Config1)

// Invalid (compile-time error)
// const invalidConfig: ConfigValidator<{ timeout: 10 }> = { timeout: 10 };

// Update user
const UpdatedUser = UpdateObject(users[0]!, 'role', 'Developer'); // use non-null assertion to guarantee that the user[0] is not undefined
console.log(UpdatedUser);

/* we can also use this type guard
function getUser(index: number): User | undefined {
    return users[index];
}

const user0 = getUser(0);
if (user0) {
    const UpdatedUser = UpdateObject(user0, 'role', 'Developer');
    console.log(UpdatedUser);
} else {
    console.log("User not found");
}
for real world scenarios where we dont know if the user exist or not

*/
users[0] = UpdateObject(users[0]!, 'role', 'Developer');
console.log(users[0])
console.log(`Total Admins: ${users.filter(u => u.role === 'Admin').length}`); // calculate admins output: 0
console.log(`Total Developer: ${users.filter(u => u.role === 'Developer').length}`); // calculate developer output: 2
console.log(`Total User: ${users.filter(u => u.role === 'User').length}`); // calculate user output: 1




