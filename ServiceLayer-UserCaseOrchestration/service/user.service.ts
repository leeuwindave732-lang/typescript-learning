// User Service

import type { User } from "../users/user.type.js";
import type { Result } from "../core/result.js";
import type { UserError } from "../core/error.js";
import { UserRepository } from "../users/user.repository.js";


export class UserService {
    constructor(private readonly repo: UserRepository) {}

    async registerUser(user: User): Promise<Result<User, UserError>> {
        // business
        if (user.role === "Admin" && !user.email.endsWith("@gmail.com")){
            return { ok: false, error: "INVALID_EMAIL"}
        }

        return this.repo.add(user)
    }

    async promoteUser(
        id: number,
        newRole: User["role"]
    ): Promise <Result<User, UserError>> {
        const existing = await this.repo.get(id);
        if (!existing.ok) return existing;

        return this.repo.update(id, { role: newRole})
    }
}