// Validator
import type { User } from "./types.js"

export function validateUser<T extends { email: string}>(user: T): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)

}

/* regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    -Ensures there’s something before the @.
    -Ensures there’s something after the @.
    -Ensures there’s at least one . in the domain part.
    -Prevents spaces and extra @ symbols.  
    
    in email
*/