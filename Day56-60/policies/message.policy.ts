// message.policy.ts

import type { Conversation } from "../conversations/conversation.types.js";
import type { UserId } from "../core/brand.js";

/**
 * Policies NEVER mutate
 * Policies NEVER emit events
 * Policies ONLY answer questions
 */

export function canUserSendMessage(
    conversation: Conversation,
    userId: UserId
): boolean {
    return conversation.members.includes(userId);
}