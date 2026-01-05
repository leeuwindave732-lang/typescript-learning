// convert the Day 24 Auth namespace into module

import type { User } from "./user.js"
import { validateUser } from "./validator.js"
import { isLogin } from "./logger.js"

const user1: User = {
    id: 101,
    email: "Seiju@gmail.com",
    role: "Developer"
}

const user2: User = {
    id: 102,
    email: "Hajimegmail.com",
    role: "Production"
}

const isValid =  validateUser(user1) // Is email Seiju@gmail.com valid: true
const isInvalid = validateUser(user2) // Is email Hajimegmail.com valid: false

console.log(`Is email ${user1.email} valid:`, isValid)
console.log(`Is email ${user2.email} valid:`, isInvalid)

isLogin(user1) // [AUTH]: User Seiju@gmail.com has logged in as Developer
isLogin(user2) // [AUTH]: User Hajimegmail.com has been denied to enter