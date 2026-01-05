// main

import type { User, Student} from "./types.js"
import { Repository } from "./repository.js"

// User Repository

const userRepo = new Repository<User>();

userRepo.add(
    {
        id: 101,
        name: "Seiju",
        email: "Seiju@gmail.com",
        role: "Developer"
    }
)
userRepo.add(
    { 
        id: 102,
        name: "Hajime",
        email: "Hajime@gmail.com",
        role: "Developer"
    }
)

console.log(userRepo.list());
console.log("---------------------------------------------------")

// update role for Hajime
userRepo.update(102, { role : "User"});
console.log(userRepo.get(102));

// remove Seiju
userRepo.remove(101);
console.log(userRepo.list())
console.log("---------------------------------------------------")


const StudentRepo = new Repository<Student>();

StudentRepo.add(
    {
        id: 111,
        name: "Jiro",
        grades: [99, 89, 100],
        course: "Computer Science"
    }
)

StudentRepo.add(
    {
        id: 112,
        name: "Haji",
        grades: [100, 100, 100],
        course: "Information Technology"
    }
)


console.log(StudentRepo.list())
console.log("---------------------------------------------------")

/*
                [
                {
                    id: 101,
                    name: 'Seiju',
                    email: 'Seiju@gmail.com',
                    role: 'Developer'
                },
                {
                    id: 102,
                    name: 'Hajime',
                    email: 'Hajime@gmail.com',
                    role: 'Developer'
                }
                ]
                ---------------------------------------------------
                { id: 102, name: 'Hajime', email: 'Hajime@gmail.com', role: 'User' } // updated role for hajime Developer -> User
                [
                { id: 102, name: 'Hajime', email: 'Hajime@gmail.com', role: 'User' } // delete repository of Seiju
                ]
                ---------------------------------------------------
                [
                {
                    id: 111,
                    name: 'Jiro',
                    grades: [ 99, 89, 100 ],
                    course: 'Computer Science'
                },
                {
                    id: 112,
                    name: 'Haji',
                    grades: [ 100, 100, 100 ],
                    course: 'Information Technology'
                }
                ]
                ---------------------------------------------------
*/