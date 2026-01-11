// message.type.ts

import type { MessageId, UserId, ConversationId } from "../core/brand.js";
import type { MessageState } from "./message.state.js";

// Representation of a message
export type Message = Readonly<{
    id: MessageId;
    conversationId: ConversationId;
    senderId: UserId;
    content: string;
    state: MessageState;
    createdAt: Date;
    deliveredTo: ReadonlySet<UserId>;
    readBy: ReadonlySet<UserId>;
    version: number;
}>;

