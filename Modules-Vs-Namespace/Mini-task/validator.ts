// Validator

import type { User } from './user.js'

export function validateUser(user: User): boolean {
    return user.email.includes("@")
}