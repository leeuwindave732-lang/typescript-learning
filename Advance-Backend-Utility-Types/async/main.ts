// main 

import type { User } from "./types.js";
import { login } from "./logger.js";

const users: User[] = [
    {
        id: 101,
        email: "valid@user.com",
        role: "Production",
        isActive: true
    },
    {
        id: 102,
        email: "invaliduser.com",
        role: "Developer",
        isActive: true
    },
    {
        id: 103,
        email: "inactive@user.com",
        role: "Developer",
        isActive: false
    },
    {
        id: 103,
        email: "activeuser.com",
        role: "Developer",
        isActive: true
    }
]

for (const u of users) {
    login(u)
}

/*
[AUTH]: User valid@user.com has logged in as Production
[AUTH]: User invaliduser.com has been denied access
[AUTH]: User inactive@user.com is inactive
[AUTH]: User activeuser.com has been denied access
*/