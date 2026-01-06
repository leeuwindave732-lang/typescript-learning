/* 
    Instead of:

    throw new Error("User not found")

    We return:

    { ok: false, error: "NOT_FOUND"}

*/

import type { Result } from "./result.js";
import type { UserError } from "./errors.js";

export type User = {
    id: number,
    name: string,
    email: string,
    role: "Admin" | "Developer" | "User"
}