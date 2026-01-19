// brand.ts

export type Brand<T, B> = T & { readonly_brand: B };

export type BookId = Brand<number, "BookId">;
export type AuthorId = Brand<number, "AuthorId">;
export type MemberId = Brand<number, "MemberID">;

export const BookId = (id: number) => id as BookId;
export const AuthorId = (id: number) => id as AuthorId;
export const MemberID = (id: number) => id as MemberId;