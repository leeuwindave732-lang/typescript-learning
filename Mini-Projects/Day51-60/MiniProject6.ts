// main.ts
// Day 51-60 MiniProject

// Library & Book Management System

/**
//  Requirements:

// Model Books, Authors, and Library Members using TypeScript types.

// Use branded IDs to prevent mixing BookId, AuthorId, MemberId.

// Implement Book states: available, borrowed, reserved, lost.

// Implement Member roles: Librarian, Member, with role-based restrictions (e.g., only Librarian can add books).

// Track book events: BookAdded, BookBorrowed, BookReturned, BookReserved, BookLost.

// Implement LibraryService and EventBus to handle operations and events.

// Use utility types, readonly, sets, and maps for collections.

// Implement assertion functions for domain validation.

// Organize code using modules and imports/exports.

// Log results in the console.
 */



import { EventBus } from "./events/domain.event.js";
import { BookService } from "./books/book.service.js";
import { AuthorService } from "./authors/author.service.js";
import { MemberServive } from "./members/members.service.js";
import { BookId } from "./core/brand.js";

const events = new EventBus();
const books = new BookService(events);
const members = new MemberServive();
const authors = new AuthorService();

const librarian = members.create({
    id: 101,
    name: "Takihime",
    role: "Librarian"
});

const reader = members.create({
    id: 1001,
    name: "Takafume",
    role: "Member"
})

const author = authors.create(1, "George")

const book = books.add({
    id: BookId(1),
    title: "1984",
    authorId: author.id,
    state: { type: "Available"}
});

const book1 = books.add({
    id: BookId(2),
    title: "Moonlight",
    authorId: author.id,
    state: { type: "Available"}
});


const book2 = books.add({
    id: BookId(3),
    title: "No longer Human",
    authorId: author.id,
    state: { type: "Available"}
});


books.borrow(BookId(3), reader.id)
books.returned(BookId(3), reader.id)
books.lost(BookId(2))


console.log("EVENT LOG:", events.getAll());

/** 
    // Output: 
    //   [EVENTS]: { type: 'BookAdded', bookId: 1, at: 2026-01-20T12:58:05.941Z }
    // [EVENTS]: { type: 'BookAdded', bookId: 2, at: 2026-01-20T12:58:05.942Z }
    // [EVENTS]: { type: 'BookAdded', bookId: 3, at: 2026-01-20T12:58:05.943Z }
    // [EVENTS]: {
    //   type: 'BookBorrowed',
    //   bookId: 3,
    //   memberId: 1001,
    //   at: 2026-01-20T12:58:05.943Z
    // }
    // [EVENTS]: {
    //   type: 'BookReturned',
    //   bookId: 3,
    //   memberId: 1001,
    //   at: 2026-01-20T12:58:05.943Z
    // }
    // [EVENTS]: { type: 'BookLost', bookId: 2, at: 2026-01-20T12:58:05.943Z }
    // EVENT LOG: [
    //   { type: 'BookAdded', bookId: 1, at: 2026-01-20T12:58:05.941Z },
    //   { type: 'BookAdded', bookId: 2, at: 2026-01-20T12:58:05.942Z },
    //   { type: 'BookAdded', bookId: 3, at: 2026-01-20T12:58:05.943Z },
    //   {
    //     type: 'BookBorrowed',
    //     bookId: 3,
    //     memberId: 1001,
    //     at: 2026-01-20T12:58:05.943Z
    //   },
    //   {
    //     type: 'BookReturned',
    //     bookId: 3,
    //     memberId: 1001,
    //     at: 2026-01-20T12:58:05.943Z
    //   },
    //   { type: 'BookLost', bookId: 2, at: 2026-01-20T12:58:05.943Z }
    // ]
 */