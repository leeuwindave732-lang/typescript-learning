// message.service.ts

import { MessageId, UserId } from "../core/brand.js";
import type { Message } from "./message.types.js";
import { deliver, read, unsent, edit } from "./message.state.js";
import type { EventBus } from "../events/domain-event.js";

export class MessageService {
    private messages = new Map<MessageId, Message>();

    constructor(private readonly events: EventBus) {}

    // Send a new message
    send(message: Message) {
        this.messages.set(message.id , message);
        this.events.emit({
            type: "MessageSent",
            messageId: message.id,
            senderId: message.senderId,
            at: new Date()
        });
        return message;
    }

    // Delete a message 
    delete(id: MessageId) {
        const msg = this.messages.get(id);
        if(!msg) throw new Error("Message not found");

        this.messages.delete(id);

        this.events.emit({
            type: "MessageDeleted",
            messageId: msg.id,
            at: new Date()
        });

        return msg;
    }

    // Edit a message
    edit(id: MessageId, content: string, editorId: UserId) {
        const msg = this.messages.get(id);
        if(!msg) throw new Error("Message not found");

        const updated = { ...msg, content, state: edit(msg.state, content)};
        this.messages.set(id, updated);
        
        this.events.emit({
            type: "MessageEdited",
            messageId: msg.id,
            editorId,
            content,
            at: new Date()
        });

        return updated;
    }

    // Mark a message as delivered
    markDelivered(id: MessageId) {
        const msg = this.messages.get(id);
        if(!msg) throw new Error("Message not found");

        const updated = { ...msg, state: deliver(msg.state)};
        this.messages.set(id, updated);
        return updated;
    }

    // Mark a message as Read
    markRead(id: MessageId, readerId: UserId) {
        const msg = this.messages.get(id);
        if(!msg) throw new Error("Message not found");

        const updated = { ...msg, state: read(msg.state)};
        this.messages.set(id, updated)

        this.events.emit({
            type: "MessageRead",
            messageId: msg.id,
            senderId: msg.senderId,
            readerId,
            at: new Date()
        });
        return updated;
    }
}