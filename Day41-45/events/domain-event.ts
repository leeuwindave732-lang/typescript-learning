// domain.event.ts

import type { MessageId, UserId } from "../core/brand.js";

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

export class EventBus {
    private events: DomainEvent[] = [];

    // Store an event and log it
    emit(event: DomainEvent) {
        this.events.push(event);
        console.log("[EVENT]", event)
    }

    // Get all emitted events
    getAll() {
        return this.events;
    }
}