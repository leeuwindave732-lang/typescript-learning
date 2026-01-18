// message.assert.ts

import type { Message } from "../messages/message.types.js";

export function assertMessageEditable(message: Message): void {
    if (message.state.type !== "sent") {
        throw new Error("Only sent messages can be edited")
    }
}

export function assertContentValid(content: string): void {
    if (!content.trim()) {
        throw new Error("Message content cannot be empty");
    }

    if (content.length > 500) {
        throw new Error("Message too long")
    }
}