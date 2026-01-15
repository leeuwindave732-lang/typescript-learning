// user repository

import type { User, UserId } from "./users.type.js";
import type { UserState } from "./users.state.js";

export type UserRepo = {
    data: User;
    state: UserState;
}

export class UserRepository {
    private repo = new Map<UserId, UserRepo>();

    save(user: UserRepo) {
        this.repo.set(user.data.id, user); 
    }

    get(id: UserId): UserRepo | undefined {
        return this.repo.get(id);
    } 

    list(): UserRepo[] {
        return [...this.repo.values()];
    }


}