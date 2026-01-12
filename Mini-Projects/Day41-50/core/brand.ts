// brand.ts
import type { Item } from "../Item/item.type.js";
import type { Player } from "../Player/player.type.js";

export type Brand<T, B> = T & { readonly _brand: B};

export type PlayerId = Brand<number, "PlayerId">;
export type ItemId = Brand<number, "ItemId">;

export const PlayerId = (id: number) => id as PlayerId;
export const ItemId = (id: number) => id as ItemId;