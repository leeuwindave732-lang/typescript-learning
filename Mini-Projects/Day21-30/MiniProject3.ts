// Day 21 – 30 Mini Project
// TypeSafe Backend Domain Architecture

/* Requirements:

    core/
    - Implement a Result<T, E> pattern for safe error handling
    - Define domain-level error unions instead of throwing exceptions

    users/
    - Model User entities using strong TypeScript types
    - Implement a UserRepository using the repository pattern
    - Handle CRUD operations with Result<T, E>
    - Separate business logic from data access

    students/
    - Define Student domain types
    - Implement student-related services (grades, averages, etc.)
    - Reuse shared domain logic without duplication

    auth/
    - Define roles and permissions using literal and template literal types
    - Enforce role–permission relationships at compile time
    - Perform runtime authorization using guard functions
    - Prevent invalid permission access with explicit validation

    config/
    - Enforce configuration rules using conditional types
    - Validate config objects at compile time

    app/
    - Organize code using ES modules (import / export)
    - Keep the application entry point minimal and declarative
    - Log validation results and domain actions to the console

*/

import { UserRepository } from "./users/userrepository.js";
import { UserController } from "./users/usercontroller.js";
import { hasPermission } from "./auth/guard.js";
import type { Student } from "./students/studenttype.js";
import type { StudentError } from "./students/studentservice.js";
import { computeAverage, getStudentStatus, StudentSummary } from "./students/studentservice.js";


async function main() {
    const repo = new UserRepository();
    const controller = new UserController(repo);

    const user1 = {
            id: 101, 
            name: "Seiju",
            email: "Seiju@gmail.com",
            role: "Admin"
        }as const

        const user2 = {
            id: 102,
            name: "Hajime",
            email: "Hajime@gmail.com",
            role: "Developer"
        }as const

        const result1 = await controller.addUser(user1);
        if(!result1.ok) {
            console.log(`Error adding user1: ${result1.error}`);
            console.log("----------------------------------------------------------------------");
        } else {
            console.log("Added user1:", result1.value);
            console.log("----------------------------------------------------------------------");
        }

        const result2 = await controller.addUser(user2);
        if(!result2.ok) {
            console.log(`Error adding user1: ${result2.error}`);
            console.log("----------------------------------------------------------------------");
        } else {
            console.log("Added user1:", result2.value);
            console.log("----------------------------------------------------------------------");
        }

        // fetch user
        const fetched = await controller.getUser(101);
        if (!fetched.ok) {
            console.log("Fetch error:", fetched.error);
            console.log("----------------------------------------------------------------------");
        } else {
            console.log("Fetched user:", fetched.value);
            console.log("----------------------------------------------------------------------");
        }

        // update user
        const update = await controller.updateUser(103, {role: "Admin"});
        if (!update.ok) {
            console.log("Update error:", update.error)
            console.log("----------------------------------------------------------------------");
        } else {
            console.log("Update user:", update.value)
            console.log("----------------------------------------------------------------------");
        }

        // delete user
        const deleted = await controller.deleteUser(103)
        if (!deleted.ok) {
            console.log("Delete error:", deleted.error)
            console.log("----------------------------------------------------------------------");
        } else {
            console.log("Deleted user:", deleted.value)
            console.log("----------------------------------------------------------------------");
        }

        // list users
        const list = await controller.listUsers();
        if (list.ok) console.log("All users:", list.value)
        console.log("----------------------------------------------------------------------");
    }

    
    try {
        hasPermission("Admin", "Admin_Read");
        hasPermission("Admin", "Admin_Delete");
    } catch (err) {
        console.error("[AUTH ERROR]:", (err as Error).message);
    }
    console.log("--------------------------------------------------");

    // Student
    const student1: Student = {
        id: 201,
        name: "Sei",
        year: 1,
        grades: [99, 98, 100]
    };

    const student2: Student = {
        id: 202,
        name: "Jiro",
        year: 2,
        grades: [88, 91, 85]
    };

    const student3: Student = {
        id: 203,
        name: "Roji",
        year: 1,
        grades: []
    }

    const students = [student1, student2, student3];

    for (const student of students) {
        console.log(`Student: ${student.name}`);

        const avgResult = computeAverage(student);
        if (!avgResult.ok) {
            const error: StudentError = avgResult.error;
            switch (error) {
                case "NO_GRADES":
                    console.log("Error: Student has no grades to compute average.");
                    break;
                default:
                    console.log("Unknown student error:", error);
            }
            console.log("--------------------------------------------------");
            continue;
        }

        const average = avgResult.value;
        console.log("Average:", average);
        console.log("Status:", getStudentStatus(average));
        console.log("--------------------------------------------------");
    }


main().catch(err => {
    console.error("FATAL ERROR:", err);
});

/* OUTPUT

            --------------------------------------------------
            Student: Sei
            Average: 99
            Status: HONOR
            --------------------------------------------------
            Student: Jiro
            Average: 88
            Status: PASS
            --------------------------------------------------
            Student: Roji
            Error: Student has no grades to compute average.
            --------------------------------------------------
            Added user1: { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' }
            ----------------------------------------------------------------------
            Added user1: {
            id: 102,
            name: 'Hajime',
            email: 'Hajime@gmail.com',
            role: 'Developer'
            }
            ----------------------------------------------------------------------
            Fetched user: { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' }
            ----------------------------------------------------------------------
            Update error: NOT_FOUND
            ----------------------------------------------------------------------
            Delete error: NOT_FOUND
            ----------------------------------------------------------------------
            All users: [
            { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' },
            {
                id: 102,
                name: 'Hajime',
                email: 'Hajime@gmail.com',
                role: 'Developer'
            }
            ]
            ----------------------------------------------------------------------

*/