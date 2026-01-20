// members.service.ts

import type { Member } from "./members.type.js";
import { MemberId } from "../core/brand.js";

export class MemberServive {
    private members = new Map<number, Member>();

    create(input: { 
        id: number,
        name: string,
        role: "Librarian" | "Member",
    }) {
        const member: Member = {
            id: MemberId(input.id),
            name: input.name,
            role: input.role
        };
        this.members.set(input.id, member);
        return member;
    }
}