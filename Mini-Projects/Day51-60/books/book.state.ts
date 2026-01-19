// book.state.ts

export type BookState = 
    | { type: "Available" }
    | { type: "Borrowed", id: number, at: Date}
    | { type: "Lost", at: Date}