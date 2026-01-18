// main.ts

import { EventBus } from "./events/domain-event.js";
import { CreateConversation } from "./conversations/conversation.types.js";
import { ConversationAggregate } from "./conversations/conversation.aggregate.js";
import { UserId, ConversationId, MessageId } from "./core/brand.js";

const events  = new EventBus();

events.subscribe(e => {
    console.log("EVENT:", e)
})

const userA = UserId(1);
const userB = UserId(2);

const conversation = CreateConversation(
    ConversationId(100),
    [userA, userB]
)

const convoAggregate = new ConversationAggregate(conversation, events);

const message = convoAggregate.sendMessage(
    userA,
    "Hello, Im Seiju",
    MessageId(599)
);

console.log("Message Created:", message)

/**
    [EVENT] {
    type: 'MessageSent',
    messageId: 599,
    senderId: 1,
    at: 2026-01-18T06:33:13.440Z
    }
    Message Created: {
    id: 599,
    conversationId: 100,
    senderId: 1,
    content: 'Hello, Im Seiju',
    state: { type: 'sent', at: 2026-01-18T06:33:13.440Z },
    createdAt: 2026-01-18T06:33:13.440Z,
    deliveredTo: Set(0) {},
    readBy: Set(0) {},
    version: 1,
    attachments: [],
    reactions: Map(0) {},
    mentions: Set(0) {}
    }
 */