// player type.ts

import type { PlayerId } from "../core/brand.js";
import type { ItemId } from "../core/brand.js";
import type { PlayerStats } from "../Item/items.effects.js";

export type Player = {
    PlayerId: PlayerId;
    name: string;
    level: number;
    stats: PlayerStats;
    inventory: ReadonlySet<ItemId>;

}