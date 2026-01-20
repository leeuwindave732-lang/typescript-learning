// book.service.ts

import { EventBus } from "../events/domain.event.js";
import type { Books } from "./book.type.js";
import { borrow, returnBook, markLost } from "./book.state.js";
import { BookId, MemberId } from "../core/brand.js";


export class BookService {
    private libro = new Map<BookId, Books>();

    constructor(private readonly events: EventBus) {}

    add(book: Books) {
        this.libro.set(book.id, book);
        this.events.emit({ type: "BookAdded", bookId: book.id, at: new Date() });
        return book;
    }

    borrow(bookId: BookId, memberId: MemberId) {
        const book = this.get(bookId);
        const updated = { ...book, state: borrow(book.state, memberId)};
        this.libro.set(bookId, updated);
        this.events.emit({ type: "BookBorrowed", bookId, memberId, at: new Date() });
        return updated;
    }

    returned(bookId: BookId, memberId: MemberId) {
        const book = this.get(bookId);
        const updated = { ...book, state: returnBook(book.state)}
        this.libro.set(bookId, updated);
        this.events.emit({ type: "BookReturned", bookId, memberId, at: new Date() });
        return updated
    }

    lost(bookId: BookId) {
        const book = this.get(bookId);
        const updated = { ...book, state: markLost(book.state)}
        this.libro.set(bookId, updated);
        this.events.emit({ type: "BookLost", bookId, at: new Date() });
        return updated;
    }


    private get(id: BookId): Books {
        const book = this.libro.get(id);
        if (!book) throw new Error ("Book not found");
        return book;
    }
}