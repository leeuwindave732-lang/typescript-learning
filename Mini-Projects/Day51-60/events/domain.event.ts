// domain.event.ts

import { BookId, MemberId } from "../core/brand.js";

export type DomainEvent = 
    | { type: "BookAdded", bookId: BookId, at: Date}
    | { type: "BookBorrowed", bookId: BookId, memberId: MemberId, at: Date}
    | { type: "BookReturned", bookId: BookId, memberId: MemberId,  at: Date}
    | { type: "BookLost", bookId: BookId, at: Date}

export class EventBus {
    private events: DomainEvent [] = [];

    emit(event: DomainEvent) {
        this.events.push(event);
        console.log(`[EVENTS]:` , event);
    }

    getAll() {
        return [...this.events]
    }
}