// Logger

import type { User } from "./types.js"
import { validateUser } from "./validator.js"

export async function login (user: User): Promise<void> { 
    // Promise<void> → the function returns a promise that resolves with nothing (void).
    // async → allows the use of await inside, so you can wait for promises.
    await new Promise(resolve => setTimeout(resolve, 1000)) // resolve after 1s

    if (!validateUser(user)) {
        console.log(`[AUTH]: User ${user.email} has been denied access`)
        return
    }

    if (!user.isActive) {
        console.log(`[AUTH]: User ${user.email} is inactive`)
        return
    }

    console.log(`[AUTH]: User ${user.email} has logged in as ${user.role}`)
}

// async -> The function always returns a Promise, even if you don’t explicitly return one.
// await ->  Pauses execution inside an async function until a Promise resolves.
// setTimout -> Schedules a function to run after a certain delay (in milliseconds).