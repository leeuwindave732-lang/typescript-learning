// user service

import type { UserState } from "./users.state.js";
import { isUserCreated } from "../Auth/account.js";
import type { UserEvent } from "./user.event.js";
import type { User } from "./users.type.js";
import { UserRepository } from "./user.repo.js";
import type { UserId } from "../../../../../Day41-45/core/brand.js";

export class UserService {
    private events: UserEvent[] = [];

    constructor(private repo: UserRepository){}

    signIn(user: User) {
        const state: UserState = { state: "SignIn", date: new Date() };
        this.repo.save({ data: user, state })
        this.events.push({ type: "SignIn", User: user.id })
        return this.events.push({ type: "AccountCreated", User: user.id })
    }

    logIn(user: User) {
        const state: UserState = { state: "LogIn", date: new Date() };
        return this.events.push({ type: "Welcome", User: user.id})
    }

    deleted( id: UserId ) {
        const state: UserState = { state: "Delete", reason: "", date: new Date()}
    }
}