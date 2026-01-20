// author.service.ts

import { AuthorId } from "../core/brand.js";
import type { Author } from "./author.types.js";

export class AuthorService {
    private authors = new Map<number, Author>();

    create(id: number, name: string) {
        const author: Author = { id: AuthorId(id), name};
        this.authors.set(id,author);
        return author;;
    }
}