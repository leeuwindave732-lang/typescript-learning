// message.read.ts


import type { UserId } from "../core/brand.js";
import type { Message } from "../messages/message.types.js";

/**
 *  Read only Helpers for conversation
 *  No mutation allowed
 */

export function getUnreadMessages(
    messages: readonly Message[],
    userId: UserId
): readonly Message[] {
    return messages.filter(
        m =>
            !m.readBy.has(userId) &&
            m.senderId !== userId
    );
}

export function getMessagesBySender(
    messages: readonly Message[],
    senderId: UserId
): readonly Message[] {
    return messages.filter(m => m.senderId === senderId);;
}