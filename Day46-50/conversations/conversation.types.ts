// conversation.types.ts

import type { MessageId, ConversationId, UserId } from "../core/brand.js";



export type Conversation = Readonly<{
    id: ConversationId;
    members: readonly UserId[];
    timeline: TimelineItem[];
}>

export type TimelineItem =
    | { type: "Message"; MessageId: MessageId, at: Date}
    | { type: "user-joined"; userId: UserId, at: Date}
    | { type: "user-left"; userId: UserId, at: Date}

export function CreateConversation(
    id: ConversationId,
    members: readonly UserId[]
): Conversation {
    const unique = new Set(members);
    if ( unique.size !== members.length) {
        throw new Error("Duplicate Members are not allowed");
    }

    return { id , members, timeline: [] };
}