// book.type.ts
import { BookId, AuthorId } from "../core/brand.js"

export type Books = Readonly<{
    BookId: BookId,
    title: string,
    genre: string,
    
}>;

// export type Genre =
//     | { type: "Comedy"; Author: AuthorId, getAt: Date}
//     | { type: "Horror"; Author: AuthorId, getAt: Date}
//     | { type: "Fantasy"; Author: AuthorId, getAt: Date}
//     | { type: "SciFi"; Author: AuthorId, getAt: Date}
//     | { type: "Adventure"; Author: AuthorId, getAt: Date}
//     | { type: "Romance"; Author: AuthorId, getAt: Date}
    

