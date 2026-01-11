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


const convo = CreateConversation( ConversationId(1), [ seiju.id, hajime.id ])
const convoAggregate = new ConversationAggregate(convo, events);

const message = messages.send({
    id: MessageId(1),
    conversationId: ConversationId(1),
    senderId: seiju.id,
    content: "Hello Hajime",
    state: { type: "sent", at: new Date() },
    createdAt: new Date(),
    deliveredTo: new Set(),
    readBy: new Set(),
    version: 1
});

const message1 = messages.send({
    id: MessageId(2),
    conversationId: ConversationId(1),
    senderId: hajime.id,
    content: "Hi Seiju",
    state: { type: "sent", at: new Date() },
    createdAt: new Date(),
    deliveredTo: new Set(),
    readBy: new Set(),
    version: 1
});

const deliveredMessage = messages.markDelivered(MessageId(1), seiju.id);
console.log("Delivered: ", deliveredMessage);

const editedMessage = messages.edit(
    MessageId(1),
    "Hi Hajime!, how are u?",
    1,
    seiju.id
)

console.log("Edited: ", editedMessage);

const readMessage = messages.markRead(MessageId(1), seiju.id);
console.log("Read: ", readMessage)


const deletedMessagae = messages.delete(MessageId(2));
console.log("Deleted: ", deletedMessagae)

console.log("All events: ", events.getAll())

/* output: 
        [EVENT] {
        type: 'MessageSent',
        messageId: 1,
        senderId: 1,
        at: 2026-01-10T15:35:15.025Z
        }
        [EVENT] {
        type: 'MessageSent',
        messageId: 2,
        senderId: 2,
        at: 2026-01-10T15:35:15.026Z
        }
        Delivered:  {
        id: 1,
        conversationId: 1,
        senderId: 1,
        content: 'Hello Hajime',
        state: { type: 'delivered', at: 2026-01-10T15:35:15.026Z }
        }
        [EVENT] {
        type: 'MessageEdited',
        messageId: 1,
        editorId: 1,
        content: 'Hi Hajime!, how are u?',
        at: 2026-01-10T15:35:15.027Z
        }
        Edited:  {
        id: 1,
        conversationId: 1,
        senderId: 1,
        content: 'Hi Hajime!, how are u?',
        state: {
            type: 'edited',
            at: 2026-01-10T15:35:15.027Z,
            content: 'Hi Hajime!, how are u?'
        }
        }
        [EVENT] {
        type: 'MessageRead',
        messageId: 1,
        senderId: 1,
        readerId: 1,
        at: 2026-01-10T15:35:15.027Z
        }
        Read:  {
        id: 1,
        conversationId: 1,
        senderId: 1,
        content: 'Hi Hajime!, how are u?',
        state: { type: 'read', at: 2026-01-10T15:35:15.027Z }
        }
        [EVENT] { type: 'MessageDeleted', messageId: 2, at: 2026-01-10T15:35:15.028Z }
        Deleted:  {
        id: 2,
        conversationId: 1,
        senderId: 2,
        content: 'Hi Seiju',
        state: { type: 'sent', at: 2026-01-10T15:35:15.026Z }
        }
        All events:  [
        {
            type: 'MessageSent',
            messageId: 1,
            senderId: 1,
            at: 2026-01-10T15:35:15.025Z
        },
        {
            type: 'MessageSent',
            messageId: 2,
            senderId: 2,
            at: 2026-01-10T15:35:15.026Z
        },
        {
            type: 'MessageEdited',
            messageId: 1,
            editorId: 1,
            content: 'Hi Hajime!, how are u?',
            at: 2026-01-10T15:35:15.027Z
        },
        {
            type: 'MessageRead',
            messageId: 1,
            senderId: 1,
            readerId: 1,
            at: 2026-01-10T15:35:15.027Z
        },
        {
            type: 'MessageDeleted',
            messageId: 2,
            at: 2026-01-10T15:35:15.028Z
        }
        ]
*/