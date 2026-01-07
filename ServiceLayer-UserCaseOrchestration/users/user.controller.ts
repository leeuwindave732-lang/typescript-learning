// User Controller

import type { User } from "./user.type.js";
import type { Result } from "../core/result.js";
import type { UserError } from "../core/error.js";
import { UserService } from "../service/user.service.js";

export class UserController {
    constructor(private readonly service: UserService) {}

    addUser(user: User): Promise<Result<User, UserError>> {
        return this.service.registerUser(user)
    }

    
    promoteUser(id: number, role: User["role"]): Promise<Result<User, UserError>> {
        return this.service.promoteUser(id, role)
    }
}