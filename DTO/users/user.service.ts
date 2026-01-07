// User Service
// --------------------------------------------------
// Responsibility:
// - Contains BUSINESS RULES
// - Works only with TRUSTED data
// - Never knows about DTOs or unknown types
// - Coordinates repository actions
// --------------------------------------------------

import type { User } from "./user.types.js";
import type { Result } from "../core/result.js";
import type { UserError } from "../core/error.js";
import { UserRepository } from "./user.repository.js";


export class UserService {
    constructor(private readonly repo: UserRepository) {}

    // CREATE USER
    // Admin users must use a Gmail address
    async registerUser(user: User): Promise<Result<User, UserError>> {
        // business
        if (user.role === "Admin" && !user.email.endsWith("@gmail.com")){
            return { ok: false, error: "INVALID_EMAIL"}
        }

        return this.repo.add(user)
    }

    // READ
    // FETCH USER
    async getUser(id: number): Promise<Result<User, UserError>> {
        return this.repo.get(id);
    }

    // UPDATE
    // Applies business constraints before persistence
    async updateUser(id: number, updates: Partial<User> ): Promise <Result<User, UserError>> {
        
        if (updates.role === "Admin" && updates.email && !updates.email.endsWith("@gmail.com")) {
        return { ok: false, error: "INVALID_EMAIL" };
        }

        return this.repo.update(id, updates);
    }

    // REMOVE
    // DELETE USER
    async removeUser(id: number): Promise<Result<User, UserError>> {
        return this.repo.remove(id);
    }
}