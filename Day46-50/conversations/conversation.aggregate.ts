// conversation.aggregate.ts

import type { Conversation } from "./conversation.types.js";
import { EventBus } from "../events/domain-event.js";
import { type UserId, MessageId } from "../core/brand.js";
import type { Message } from "../messages/message.types.js";
import type { MessageState } from "../messages/message.state.js"

export class ConversationAggregate {
    constructor(
        private readonly convo: Conversation,
        private readonly events: EventBus
    ) {}

    sendMessage(
        senderId: UserId,
        content: string,
        id: MessageId
    ): Message {
        if (!this.convo.members.includes(senderId)) {
            throw new Error("User not in conversation");
        }

        const msg: Message = {
            id,
            conversationId: this.convo.id,
            senderId,
            content,
            state: { type: "sent", at: new Date() },
            createdAt: new Date(),
            deliveredTo: new Set(),
            readBy: new Set(),
            version: 1
        };

        this.events.emit({
            type: "MessageSent",
            messageId: id,
            senderId,
            at: new Date()
        });

        return msg
    }
}