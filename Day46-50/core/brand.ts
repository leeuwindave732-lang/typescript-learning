// brand.ts

export type Brand<T, B> = T & { readonly _brand: B};

export type UserId = Brand<number, "UserId">;
export type ConversationId = Brand<number, "ConversationId">;
export type MessageId = Brand<number, "MessageId">;

export const UserId = (id: number) => id as UserId;
export const ConversationId = (id: number) => id as ConversationId;
export const MessageId = (id: number) => id as MessageId;