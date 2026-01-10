// conversation.types.ts

import type { ConversationId, UserId } from "../core/brand.js";


export type Conversation = Readonly<{
    id: ConversationId;
    members: readonly UserId[];
}>

export function CreateConversation(
    id: ConversationId,
    members: readonly UserId[]
): Conversation {
    const unique = new Set(members);
    if ( unique.size !== members.length) {
        throw new Error("Duplicate Members are not allowed");
    }

    return { id , members };
}