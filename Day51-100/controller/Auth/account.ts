// account

import type { User } from "../Users/users.type.js"

export function isUserCreated(user: User) {
    if ( !user ) {
        return `Create account first`
    } else if ( !user.email.includes('@')) {
        return `User email is invalid`
    } else if ( user.password <= 5 ) {
        return `Password must be above 5`
    } else {
        return `Welcome back user ${user.name}`
    }
}