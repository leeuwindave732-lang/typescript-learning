// user.types.ts

import type { UserId } from "../core/brand.js";

export type UserRole = "Admin" | "Member";

export type User = Readonly<{
    id: UserId;
    name: string;
    email: string;
    role: UserRole;
}>;

