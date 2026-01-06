// main

import { UserRepository } from "./ErrorHandling/userRepository.js";

async function main() {
    const repo = new UserRepository();

    // add user
    const usersToAdd = [
    { id: 101, name: "Seiju", email: "Seiju@gmail.com", role: "Admin" },
    { id: 102, name: "Hajime", email: "Hajime@gmail.com", role: "Developer" },
    { id: 103, name: "Jiro", email: "Jiro@gmail.com", role: "User" }
    ] as const;

    for ( const user of usersToAdd) {
        const result = await repo.add(user)

        // result is false
        if (!result.ok){
            switch (result.error) {
                // if the id added is the same as other user id 
                case "ALREADY_EXIST":
                    console.log("User already exists");
                    console.log("-------------------------------------------------------------------")
                    break;
                // if theres no "@"
                case "INVALID_EMAIL":
                    console.log("Invalid email");
                    console.log("-------------------------------------------------------------------")
                    break;
            }
        } else {
            console.log("User added:", result.value)
            console.log("-------------------------------------------------------------------")
        }
    }
    // fetch user
    const user = await repo.get(101);
    console.log("Fetched user:", user)
    console.log("-------------------------------------------------------------------")

    // update user
    const update = await repo.update(103, {email: "Jiro.com"})
    console.log("User updated:", update)
    console.log("-------------------------------------------------------------------")
    
    // list all the user
    console.log("All users:", await repo.list())
    console.log("-------------------------------------------------------------------")

}

main();

/* 
    User added: { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' }
    -------------------------------------------------------------------
    User added: {
    id: 102,
    name: 'Hajime',
    email: 'Hajime@gmail.com',
    role: 'Developer'
    }
    -------------------------------------------------------------------
    User added: { id: 103, name: 'Jiro', email: 'Jiro@gmail.com', role: 'User' }
    -------------------------------------------------------------------
    Fetched user: {
    ok: true,
    value: { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' }
    }
    -------------------------------------------------------------------
    User updated: { ok: false, error: 'INVALID_EMAIL' }
    -------------------------------------------------------------------
    All users: {
    ok: true,
    value: [
        { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' },
        {
        id: 102,
        name: 'Hajime',
        email: 'Hajime@gmail.com',
        role: 'Developer'
        },
        { id: 103, name: 'Jiro', email: 'Jiro@gmail.com', role: 'User' }
    ]
    }
    -------------------------------------------------------------------
*/