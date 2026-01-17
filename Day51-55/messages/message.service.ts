// message.service.ts

import { MessageId, UserId } from "../core/brand.js";
import type { Message } from "./message.types.js";
import { deliver, read, unsent, edit } from "./message.state.js";
import type { EventBus } from "../events/domain-event.js";
import type { User } from "../users/user.types.js";

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
    edit(id: MessageId, content: string, expectedVersion: number, editorId: UserId) {
        const msg = this.messages.get(id);
        if (!msg) throw new Error("Message not found");

        if (msg.version !== expectedVersion) throw new Error("Version conflict");

        const updated = { ...msg, content, state: edit(msg.state, content), version: msg.version + 1};

        this.messages.set(id, updated, );
        
        this.events.emit({
            type: "MessageEdited",
            messageId: id,
            editorId,
            content,
            at: new Date()
        });

        return updated;
    }

    // Mark a message as delivered
    markDelivered(id: MessageId, userId: UserId) {
        const msg = this.messages.get(id);
        if (!msg) throw new Error("Message not found");

        const DeliveredTo = new Set(msg?.deliveredTo);

        if (DeliveredTo.has(userId)) {
            return msg
        }

        DeliveredTo.add(userId)

        const updated = { ...msg, DeliveredTo };
        this.messages.set(id , updated)
        return updated;
    }

    // Mark a message as Read
    markRead(id: MessageId, userId: UserId) {
        const msg = this.messages.get(id);
        if(!msg) throw new Error("Message not found");

        const ReadBy = new Set(msg.readBy);
        ReadBy.add(userId)
        
        const updated = { ...msg,  ReadBy};
        this.messages.set(id, updated)

        this.events.emit({
            type: "MessageRead",
            messageId: msg.id,
            senderId: msg.senderId,
            readerId: userId,
            at: new Date()
        });
        return updated;
    }
}