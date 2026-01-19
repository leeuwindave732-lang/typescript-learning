// book.service.ts

import type { Books } from "./book.type.js";
import { BookId } from "../core/brand.js";


export class LibraryService {
    private libro = new Map<BookId, Books>();

    addBooks(id: BookId, title: string, genre: string): Books {
        const book:  Books = {
            BookId: BookId(id),
            title,
            genre,
            
        }
        this.libro.set(book.BookId, book);
        return book;
    }
    
}