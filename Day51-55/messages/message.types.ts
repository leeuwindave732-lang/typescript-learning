// message.type.ts

import type { MessageId, UserId, ConversationId } from "../core/brand.js";
import type { Attachment } from "./message.attachment.js";
import type { MessageReaction } from "./message.reaction.js";
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
    attachments: readonly Attachment[];
    reactions: MessageReaction;
    mentions: ReadonlySet<UserId>
}>;

