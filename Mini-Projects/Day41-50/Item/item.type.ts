// item.type.ts

import type { ItemId } from "../core/brand.js";
import type { ItemEffect } from "./items.effects.js";

export type ItemType = "Weapon" | "Bow" | "Spear"| "Potion";
export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export type Item = Readonly<{
    id: ItemId;
    name: string;
    type: ItemType;
    rarity: Rarity;
    itemEffect: ItemEffect
}>;