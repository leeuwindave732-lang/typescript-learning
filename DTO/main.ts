// main
/* 
    DTO = untrusted input
    Controller = validates input
    Service = applies business rules
    Repository = stores data
*/
import { UserRepository } from "./users/user.repository.js";
import { UserService } from "./users/user.service.js";
import { UserController } from "./users/user.controller.js";

// Create Repositories, Service, Controller
const repo = new UserRepository();
const service = new UserService(repo);
const controller = new UserController(service);


async function main() {
    console.log("Create USER....")
    const user1 = await controller.createUser(
        {
            id: 101,
            name: "Seiju",
            email: "Seiju@gmail.com",
            role: "Admin"
        }
    )
    console.log("Created:", user1);

    const user2 = await controller.createUser(
        {
            id: 102,
            name: "Hajime",
            email: "Hajime@gmail,com",
            role: "User"
        }
    );
    console.log("Created:", user2);

    console.log("Read USER....")
    const read1 = await controller.readUser({ id: 101 });
    console.log("User:", read1)

    console.log("Update USER...")
    const update1 = await controller.updateUser({
        id: 101,
        role: "Developer"
    });
    console.log("User Updated:", update1)

    console.log("Delete USER....")
    const delete1 = await controller.deleteUser({ id: 103 })
    console.log("Deleted User:", delete1)

    console.log("List USER...")
    const list = await repo.list();
    if (list.ok) console.log("All users:", list.value);
}
main();

/* 
        Create USER....
        Created: {
        ok: true,
        value: { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' }
        }
        Created: {
        ok: true,
        value: { id: 102, name: 'Hajime', email: 'Hajime@gmail,com', role: 'User' }
        }
        Read USER....
        User: {
        ok: true,
        value: { id: 101, name: 'Seiju', email: 'Seiju@gmail.com', role: 'Admin' }
        }
        Update USER...
        User Updated: {
        ok: true,
        value: {
            id: 101,
            name: 'Seiju',
            email: 'Seiju@gmail.com',
            role: 'Developer'
        }
        }
        Delete USER....
        Deleted User: { ok: false, error: 'NOT_FOUND' }
        List USER...
        All users: [
        {
            id: 101,
            name: 'Seiju',
            email: 'Seiju@gmail.com',
            role: 'Developer'
        },
        { id: 102, name: 'Hajime', email: 'Hajime@gmail,com', role: 'User' }
        ]

*/