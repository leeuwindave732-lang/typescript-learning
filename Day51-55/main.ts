// main.ts

import { UserService } from "./users/user.service.js";
import { ConversationId, MessageId } from "./core/brand.js";
import { CreateConversation } from "./conversations/conversation.types.js";
import { EventBus } from "./events/domain-event.js";
import { MessageService } from "./messages/message.service.js";
import { ConversationAggregate } from "./conversations/conversation.aggregate.js";

const users = new UserService();
const events = new EventBus();
const messages = new MessageService(events);

const seiju = users.createUser({
    id: 1,
    name: "Seiju",
    email: "Seiju@gmail.com",
    role: "Member"
});

const hajime = users.createUser({
    id: 2,
    name: "Hajime",
    email: "Hajime@gmail.com",
    role: "Admin"
});

const ken = users.createUser({
    id: 3,
    name: "Ken",
    email: "ken@gmail.com",
    role: "Member"
});

let conversation = CreateConversation(
    ConversationId(1),
    [seiju.id, hajime.id]
);

console.log("Initial Conversation:", conversation);

let aggregate = new ConversationAggregate(conversation, events)

conversation = aggregate.addMember(ken.id);
aggregate = new ConversationAggregate(conversation, events);

console.log("\nAfter Ken joined:");
console.log(conversation.members);
console.log(conversation.timeline);

const { conversation: afterMessage, message } = aggregate.sendMessage(
    seiju.id,
    "Hello everyone 👋",
    MessageId(1)
);

conversation = afterMessage;
aggregate = new ConversationAggregate(conversation, events);

console.log("\nMessage created:");
console.log(message);

console.log("\nTimeline after message:");
console.log(conversation.timeline);

conversation = aggregate.removeMember(hajime.id);
aggregate = new ConversationAggregate(conversation, events);

console.log("\nAfter Hajime left:");
console.log(conversation.members);
console.log(conversation.timeline);

console.log("All events: ", events.getAll())

/* Output:
        Initial Conversation: { id: 1, members: [ 1, 2 ], timeline: [] }
        [EVENT] {
        type: 'UserJoinedConversation',
        conversationId: 1,
        userId: 3,
        at: 2026-01-17T15:40:41.190Z
        }

        After Ken joined:
        [ 1, 2, 3 ]
        [ { type: 'user-joined', userId: 3, at: 2026-01-17T15:40:41.190Z } ]
        [EVENT] {
        type: 'MessageSent',
        messageId: 1,
        senderId: 1,
        at: 2026-01-17T15:40:41.193Z
        }

        Message created:
        {
        id: 1,
        conversationId: 1,
        senderId: 1,
        content: 'Hello everyone 👋',
        state: { type: 'sent', at: 2026-01-17T15:40:41.193Z },
        createdAt: 2026-01-17T15:40:41.193Z,
        deliveredTo: Set(0) {},
        readBy: Set(0) {},
        version: 1,
        attachments: [],
        reactions: Map(0) {},
        mentions: Set(0) {}
        }

        Timeline after message:
        [
        { type: 'user-joined', userId: 3, at: 2026-01-17T15:40:41.190Z },
        { type: 'Message', MessageId: 1, at: 2026-01-17T15:40:41.193Z }
        ]
        [EVENT] {
        type: 'UserLeftConversation',
        conversationId: 1,
        userId: 2,
        at: 2026-01-17T15:40:41.197Z
        }

        After Hajime left:
        [ 1, 3 ]
        [
        { type: 'user-joined', userId: 3, at: 2026-01-17T15:40:41.190Z },
        { type: 'Message', MessageId: 1, at: 2026-01-17T15:40:41.193Z },
        { type: 'user-left', userId: 2, at: 2026-01-17T15:40:41.197Z }
        ]
        All events:  [
        {
            type: 'UserJoinedConversation',
            conversationId: 1,
            userId: 3,
            at: 2026-01-17T15:40:41.190Z
        },
        {
            type: 'MessageSent',
            messageId: 1,
            senderId: 1,
            at: 2026-01-17T15:40:41.193Z
        },
        {
            type: 'UserLeftConversation',
            conversationId: 1,
            userId: 2,
            at: 2026-01-17T15:40:41.197Z
        }
        ]    

*/