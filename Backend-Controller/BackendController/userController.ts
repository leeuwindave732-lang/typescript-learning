// USER CONTROLLER

import { UserRepository, type User, type UserError} from "./userRepository.js";
import type { Result } from "./result.js";

export class UserController {
    constructor(private repo: UserRepository) {}

    // get a single user with type-safe response
    async getUser(id:number): Promise<Result<User, UserError>> {
        return await this.repo.get(id)
    }

    // add user with type-safe handling
    async addUser(user:User): Promise<Result<User, UserError>> {
        return await this.repo.add(user)
    }

    // update user 
    async updateUser(id:number, updates: Partial<User>): Promise<Result<User, UserError>> {
        return await this.repo.update(id, updates)
    }

    // delete user
    async deleteUser(id:number): Promise<Result<User, UserError>> {
        return await this.repo.remove(id)
    }

    // list users
    async listUsers(): Promise<Result<User[], UserError>> {
        return await this.repo.list();
    }

}