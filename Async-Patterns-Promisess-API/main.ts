// main 

import { AsyncRepository } from "./AsyncPattern/asyncRepository.js";
import type { User } from "./AsyncPattern/type.js";

async function main() {
    const userRepo = new AsyncRepository<User>();

    try {
        await userRepo.add({
            id: 101,
            name: "Seiju",
            email: "Seiju@gmail.com",
            role: "Admin"
        });
        await userRepo.add({
            id: 102,
            name: "Hajime",
            email: "Hajime@gmail.com",
            role: "Developer"
        });
        
        // fetch user id 101
        const user = await userRepo.get(101);
        console.log("Fetched user:", user)

        // update user id 102 role from Developer into User
        const updated = await userRepo.update(102, { role: "User" });
        console.log("Updated user:" ,updated)

        // delete user id 101 to the database
        const deleted = await userRepo.remove(101)
        console.log("Delete user:", deleted)

        // list all the current user
        console.log("All users:", await userRepo.list())
    } catch (error) {
        console.log("Error:", (error as Error).message)
    }
}

main();