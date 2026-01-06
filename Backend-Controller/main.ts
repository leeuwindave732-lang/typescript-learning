// main

import { UserRepository } from "./BackendController/userRepository.js";
import { UserController } from "./BackendController/userController.js";

async function main() {
    const repo = new UserRepository();
    const controller = new UserController(repo)

    // add users
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

main();

/* output:
            Added user1: { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' }
            Added user1: {
            id: 102,
            name: 'Hajime',
            email: 'Hajime@gmail.com',
            role: 'Developer'
            }
            Fetched user: { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' }
            Update error: NOT_FOUND
            Delete error: NOT_FOUND
            All users: [
            { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' },
            {
                id: 102,
                name: 'Hajime',
                email: 'Hajime@gmail.com',
                role: 'Developer'
            }
            ]
            PS C:\Users\Dave\Downloads\typescript learning\Backend-Controller> npx tsx main.ts
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