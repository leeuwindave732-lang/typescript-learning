// book.state.ts

export type BookState = 
    | { state: "Added", at: Date}
    | { state: "Removed", at: Date}
    | { state: "Available", at: Date}
    | { state: "Borrowed", at: Date}
    | { state: "Reserved", at: Date}
    | { state: "Lost", at: Date}