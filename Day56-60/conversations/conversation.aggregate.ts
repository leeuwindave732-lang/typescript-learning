// conversation.aggregate.ts

import type { Conversation } from "./conversation.types.js";
import { EventBus } from "../events/domain-event.js";
import { type UserId, MessageId } from "../core/brand.js";
import type { Message } from "../messages/message.types.js";
import { canUserSendMessage } from "../policies/message.policy.js";

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
        if (!canUserSendMessage(this.convo, senderId)) {
            throw new Error("User not allowed to send message");
        }
        
        const now = new Date();

        const message: Message = {
            id,
            conversationId: this.convo.id,
            senderId,
            content,
            state: { type: "sent", at: new Date() },
            createdAt: new Date(),
            deliveredTo: new Set(),
            readBy: new Set(),
            version: 1,
            attachments: [],
            reactions: new Map(),
            mentions: new Set(),
        };

        this.events.emit({
            type: "MessageSent",
            messageId: id,
            senderId,
            at: new Date()
        });

        return message;
    }


    addMember(userId: UserId): Conversation {
        if ( this.convo.members.includes(userId)) {
            throw new Error ("User already joined the conversation")
        }

        const updated: Conversation = {
            ...this.convo,
            members: [...this.convo.members, userId],
            timeline: [
                ...this.convo.timeline,
                { type: "user-joined", userId, at: new Date() }
            ]
        };

        this.events.emit({
            type: "UserJoinedConversation",
            conversationId: this.convo.id,
            userId,
            at: new Date()
        })

        return updated;
    }

    removeMember(userId: UserId): Conversation {
        if(!this.convo.members.includes(userId)) {
            throw new Error ("Userid not in convo")
        }
        
        const updated: Conversation = {
            ...this.convo,
            members: this.convo.members.filter(m => m !== userId),
            timeline: [
                ...this.convo.timeline,
                { type: "user-left", userId, at: new Date() }
            ]
        };

        this.events.emit({
            type: "UserLeftConversation",
            conversationId: this.convo.id,
            userId,
            at: new Date()
        })

        return updated;
    }
    
}
