// item.service.ts

import type { Player } from "../Player/player.type.js";
import type { Item } from "../Item/item.type.js";
import type { ItemEffect } from "../Item/items.effects.js";
import { applyEffect } from "../Item/items.effects.js";
import { ItemEventBus } from "../events/domain.event.js";
import { PlayerId, type ItemId } from "../core/brand.js";

export class CraftingService {
    private items = new Map<Item["id"], Item & { effect?: ItemEffect, requiredLevel?: number}>();

    constructor(private events: ItemEventBus) {};

    registerItem(item: Item, effect?: ItemEffect, requiredLevel?: number ) {
        this.items.set(
            item.id, 
            { ...item, 
                ...(effect !== undefined ? { effect} : {}), 
                ...(requiredLevel !== undefined ? { requiredLevel} : {})})
    };
    

    craftItem(player: Player, components: Item["id"][], result: Item["id"]): Player {
        // check if player owns all components
        for ( const c of components ) {
            if (!player.inventory.has(c)) {
                throw new Error("Player missing crafting components")
            }
        }

        const crafted = this.items.get(result);
        if(!crafted) throw new Error ("Player missing crafting components");

        if (crafted.requiredLevel && player.level < crafted.requiredLevel) {
            throw new Error ("Player level too low to use this items");
        }

        // Remove components from inventory
        let inventory = new Set(player.inventory);
        components.forEach(C => inventory.delete(C));
        inventory.add(result)

        this.events.emit({
            type: "ItemCrafted",
            playerId: player.PlayerId,
            itemId: result
        });

        return { ...player, inventory}
    }

    useItem(player: Player, itemId: Item["id"]): Player {
        const item = this.items.get(itemId);
        if(!item) throw new Error("Item not found");

        if(!player.inventory.has(itemId)) throw new Error("Item not in inventory");

        let inventory = new Set(player.inventory)
        inventory.delete(itemId);

        let updateStats = player.stats;
        if (item.effect) {
            updateStats = applyEffect(player.stats, item.effect)
        }

        this.events.emit({
            type: "ItemEquipoed",
            playerId: player.PlayerId,
            itemId
        })

        return { ...player, stats: updateStats, inventory}

    }
}