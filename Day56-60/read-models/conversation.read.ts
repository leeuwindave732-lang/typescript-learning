// conversation.read.ts

import type { Conversation, TimelineItem } from "../conversations/conversation.types.js";
import type { UserId } from "../core/brand.js";
import type { Message } from "../messages/message.types.js";

/**
 *  Read only Helpers for conversation
 *  No mutation allowed
 */

export function getConversationMessages(
    conversation: Conversation
): readonly UserId[] {
    return conversation.members;
}

export function getConversationTimeline(
    conversation: Conversation
): readonly TimelineItem[] {
    return conversation.timeline;
}

export function getLastMessage(
    conversation: Conversation,
    messages: readonly Message[]
): Message | undefined {
    const last = [...conversation.timeline]
    .reverse()
    .find(i => i.type === "Message");

    if (!last) return undefined;

    return messages.find(m => m.id === last.MessageId)
}