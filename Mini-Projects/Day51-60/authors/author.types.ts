// author.types.ts

import type { AuthorId } from "../core/brand.js";

export type Author = Readonly <{
    id: AuthorId,
    name: string,
}>