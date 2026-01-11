// user.service.ts

import type { User } from "./user.types.js";
import { UserId } from "../core/brand.js";

export class UserService {
    private users = new Map<number, User>();

    createUser(input: {
        id: number;
        name: string;
        email: string;
        role: "Admin" | "Member"
    }): User {
        if ( input.role === "Admin" && !input.email.endsWith("@gmail.com")) {
            throw new Error ("Admin must use gmail");
        }

        const user: User = {
            id: UserId(input.id),
            name: input.name,
            email: input.email,
            role: input.role
        };

        this.users.set(input.id, user);
        return user;
    }

    getUser(id: number): User | undefined {
        return this.users.get(id);
    }
}