namespace Auth {

    export namespace User {
        export type UserType = {
            id: number,
            email: string,
            role: 'Developer' | 'Production'
        }
    }
    
    export namespace Validator {
        export function validateUser(user: User.UserType): boolean {
            return user.email.includes("@")
        }
    }

    export namespace Logger {
        export function logLogin(user: User.UserType) {
            console.log(`[AUTH]: User ${user.email} logged in as ${user.role}`)
        }
    }
}


const user1: Auth.User.UserType = {
            id: 101,
            email: "SeijuHajime@gmail.com",
            role: "Developer"
        }

const isValid = Auth.Validator.validateUser(user1)

console.log(user1) // { id: 101, email: 'SeijuHajime@gmail.com', role: 'Developer' }
console.log(`Email valid:`, isValid) // Email valid: true
Auth.Logger.logLogin(user1) // [AUTH]: User SeijuHajime@gmail.com logged in as Developer