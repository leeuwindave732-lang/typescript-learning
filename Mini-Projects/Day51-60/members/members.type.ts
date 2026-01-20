// members.types.ts

import { MemberId } from "../core/brand.js";

export type MemberRole = "Librarian" | "Member";

export type Member = Readonly<{
    id: MemberId;
    name: string,
    role: MemberRole;
}>;