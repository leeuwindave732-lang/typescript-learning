// message.state.ts

// The state of a message at any point in time
export type MessageState = 
    | { type: "sent", at: Date }
    | { type: "deleted", at: Date }
    | { type: "edited", at: Date, content: string }
    | { type: "delivered", at: Date }
    | { type: "read", at: Date};

// mark a sent as deliverd
export function deliver( state: MessageState): MessageState {
    if ( state.type !== "sent" ) {
        throw new Error("Only set messages can be delivered");
    }
    return { type: "delivered", at: new Date() };
}

// mark a sent message as deleted
export function unsent( state: MessageState): MessageState {
    if ( state.type !== "sent") {
        throw new Error("Only sent messages can be deleted!")
    }
    return{ type: "deleted", at: new Date() };
}

// Update content and mark message as edited
export function edit( state: MessageState, content: string): MessageState {
    if ( state.type !== "sent" && state.type !== "delivered" && state.type !== "read" ) {
        throw new Error("Only sent messages and delivered can be edited!")
    }
    return{ type: "edited", at: new Date(), content };
}

// Mark a delivered message as read
export function read( state: MessageState): MessageState {
    if ( state.type !== "delivered" && state.type !== "edited") {
        throw new Error("Only delivered or edited messages can be read");
    }
    return { type: "read", at: new Date() };
}