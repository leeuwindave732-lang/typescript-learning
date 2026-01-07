// user repository

import type { Result } from "../core/result.js";
import type { UserError } from "../core/error.js";
import type { User } from "./user.types.js";

export class UserRepository {
    // Internal storage using Map for fast lookup by ID
    private data = new Map<number, User>();

    /* Add user
        - if user id already exist return "ALREADY_EXIST"
        - if user email doesnt have "@" return "INVALID EMAIL"
        - else add the user
    */
    async add(user: User): Promise<Result<User, UserError>> {
        if (this.data.has(user.id)) {
            return { ok: false, error: "ALREADY_EXIST"};
        }

        if (!user.email.includes("@")){
            return { ok: false, error: "INVALID_EMAIL"};
        }

        this.data.set(user.id, user);
        return { ok: true, value: user}
    }

    /* Fetch User
        - If theres no user id yet, or the id is incorrect return "NOT_FOUND"
        - else fetch the user
    */
    async get(id: number): Promise<Result<User, UserError>> {
        const user = this.data.get(id);
        if (!user) {
            return { ok: false, error: "NOT_FOUND"};
        }

        return { ok: true, value: user};
    }

    /* Update User
        - if the user id doesnt exist or incorrect return "NOT_FOUND"
        - if they update the email, and the email already exist or theres no "@" return "INVALID EMAIL"
        - else return the updated user
    */
    async update(id: number, updates: Partial<User>): Promise<Result<User, UserError>> {
        const user = this.data.get(id);
        if (!user) {
            return { ok: false, error: "NOT_FOUND"};
        }

        if (updates.email && !updates.email.includes("@")) {
            return { ok: false, error: "INVALID_EMAIL" };   
        }
        const updated = { ...user, ...updates };
        this.data.set(id, updated);
        return { ok: true, value: updated};
    }

    /* Remove User 
        - if the user id doesnt exist or incorrect return "NOT_FOUND"
        - else remove the user
    */
    async remove(id: number): Promise<Result<User, UserError>> {
        const user = this.data.get(id);
        if (!user) {
            return { ok: false, error: "NOT_FOUND"};
        }
        this.data.delete(id);
        return { ok: true, value: user};
    }

    /*  List all user 
            - return all in an array
    */
    async list(): Promise<Result<User[], UserError>> {
        return { ok: true, value: Array.from(this.data.values())};
    }
}