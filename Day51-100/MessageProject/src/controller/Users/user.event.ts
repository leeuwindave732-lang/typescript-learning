// user event

import type { UserId } from "./users.type.js";

export type UserEvent = 
    | { type: "SignIn", User: UserId }
    | { type: "AccountCreated", User: UserId } 
    | { type: "LogIn", User: UserId }
    | { type: "Welcome", User: UserId }
    | { type: "Deleted", User: UserId }
    | { type: "Goodbye", User: UserId }