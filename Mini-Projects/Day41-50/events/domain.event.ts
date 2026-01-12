// domain.event.ts

import type { PlayerId, ItemId } from "../core/brand.js";

export type ItemDomainEvent = 
    | { type: "ItemAdded", playerId: PlayerId, itemId: ItemId}
    | { type: "ItemUsed", playerId: PlayerId, itemId: ItemId}
    | { type: "LevelUp", playerId: PlayerId, level: number}
    | { type: "ItemCrafted", playerId: PlayerId, itemId: ItemId}
    | { type: "ItemEquipoed", playerId: PlayerId, itemId: ItemId}

export class ItemEventBus {
    private events: ItemDomainEvent[] = [];

    emit(event: ItemDomainEvent) {
        this.events.push(event);
        console.log("[EVENT]", event)
    }

    getAll() {
        return this.events;
    }
}