// domain.event.ts

import type { MessageId, ConversationId, UserId } from "../core/brand.js";

// Domain events representing things that happened to messages
export type DomainEvent = 
    | {
        type: "MessageSent";
        messageId: MessageId;
        senderId: UserId;
        at: Date;
    }
    | {
        type: "MessageRead";
        messageId: MessageId;
        senderId: UserId;
        readerId: UserId;
        at: Date;
    }
    | {
        type: "MessageDeleted";
        messageId: MessageId;
        at: Date;
    }
    | {
        type: "MessageEdited";
        messageId: MessageId;
        editorId: UserId;
        content: string;
        at: Date;
    }
    | { 
        type: "UserJoinedConversation";
        conversationId: ConversationId;
        userId: UserId;
        at: Date
    }
    | { 
        type: "UserLeftConversation";
        conversationId: ConversationId;
        userId: UserId;
        at: Date}

type EventHandler = (event: DomainEvent) => void;

export class EventBus {
    private events: DomainEvent[] = [];
    private subscribers: EventHandler[] = [];

    // Store an event and log it
    emit(event: DomainEvent) {
        this.events.push(event);
        console.log("[EVENT]", event)
    }

    subscribe(handler: EventHandler) {
        this.subscribers.push(handler);
    }

    // Get all emitted events
    getAll() {
        return this.events;
    }
}