// book.state.ts

export type BookState = 
    | { type: "Available" }
    | { type: "Borrowed", by: number, at: Date}
    | { type: "Lost", at: Date}

export function borrow( state: BookState, memberId: number ): BookState {
    if (state.type !== "Available") {
        throw new Error("Only available books can be borrowed");
    }
    return { type: "Borrowed", by: memberId, at: new Date}
}

export function returnBook(state: BookState): BookState {
    if (state.type !== "Borrowed") {
        throw new Error("Only borrowed books can be returned");
    }
    return { type: "Available"}
}


export function markLost( state: BookState ): BookState {
    if (state.type === "Lost") {
        throw new Error("Book already lost")
    }
    return { type: "Lost", at: new Date() }
}