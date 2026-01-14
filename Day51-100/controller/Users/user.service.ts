// user service

import type { UserState } from "./users.state.js";
import { isUserCreated } from "../Auth/account.js";
import type { UserEvent } from "./user.event.js";
import type { User } from "./users.type.js";
import { UserRepository } from "./user.repo.js";

export class UserService {
    private events: UserEvent[] = [];

    constructor(private repo: UserRepository){}

    signIn(user: User) {
        const state: UserState = { state: "SignIn", date: new Date() };
        this.repo.save({ data: user, state })
        this.events.push({ type: "SignIn", User: user.id })
        return { type: "AccountCreated", User: user.id }
    }
}