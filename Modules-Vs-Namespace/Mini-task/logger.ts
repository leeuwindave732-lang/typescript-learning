// Logger
import type { User } from "./user.js";

export function isLogin(user: User) {
    if (user.email.includes("@")) {
        console.log(`[AUTH]: User ${user.email} has logged in as ${user.role} `)
        console.log(`--------------------------------------------------------------`)
    } else {
        console.log(`[AUTH]: User ${user.email} has been denied to enter`)
    }
}