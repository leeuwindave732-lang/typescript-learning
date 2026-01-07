// main
/* Coordinates multiple repositories

    Applies business rules
    Keeps controllers thin
    Prepares you for REST / GraphQL / RPC later

*/
import { UserRepository } from "./users/user.repository.js";
import { UserService } from "./service/user.service.js";
import { UserController } from "./users/user.controller.js";

async function main() {
    const repo = new UserRepository();
    const service = new UserService(repo);
    const controller = new UserController(service);
    

    const result = await controller.addUser({
        id: 1,
        name: "Seiju",
        email: "Seiju@gmail.com",
        role: "Developer"
    });

    console.log("User added:",result)
    console.log("----------------------------------------------------------------------");

    const promoted = await controller.promoteUser(1, "Admin");
    console.log("User Promoted:", promoted)
    console.log("----------------------------------------------------------------------");

    const add = await repo.add({
        id: 2,
        name: "Hajime",
        email: "Hajime@gmail.com",
        role: "User"
    })
    console.log("User added:", add)

    const list = await repo.list();
    if (list.ok) console.log("All users:", list.value)
    console.log("----------------------------------------------------------------------");
}

main();

/* Output: 

    User added: {
    ok: true,
    value: { id: 1, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Developer' }
    }
    ----------------------------------------------------------------------
    User Promoted: {
    ok: true,
    value: { id: 1, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' }
    }
    ----------------------------------------------------------------------
    User added: {
    ok: true,
    value: { id: 2, name: 'Hajime', email: 'Hajime@gmail.com', role: 'User' }
    }
    All users: [
    { id: 1, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' },
    { id: 2, name: 'Hajime', email: 'Hajime@gmail.com', role: 'User' }
    ]
    ----------------------------------------------------------------------

*/