// invertory.service.ts

import type { Item } from "../Item/item.type.js";
import type { Player } from "../Player/player.type.js";
import type { ItemEffect } from "../Item/items.effects.js";
import { applyEffect } from "../Item/items.effects.js";
import { ItemId } from "../core/brand.js";

export class InventoryService {
    private items = new Map<Item["id"], Item & { effect?: ItemEffect }>();

    // register item
    registerItem(item: Item, effect?: ItemEffect) {
        this.items.set(item.id, effect? { ...item, effect} : { ...item} );
    }

    // add item
    addItem(player: Player, itemId: Item["id"]): Player {
        const inventory = new Set(player.inventory);
        inventory.add(itemId);

        return { ...player, inventory }
    }

    // remove item
    removeItem(player: Player, itemId: Item["id"]): Player {
        const inventory = new Set(player.inventory);
        inventory.delete(itemId)

        return { ...player, inventory}
    }

    // useItem
    userItem(player: Player, itemId: Item["id"]): Player {
        const item = this.items.get(itemId);
        if(!item) throw new Error ("Item not Found!")
        
        if(!player.inventory.has(itemId)) {
            throw new Error ("Item not in inventory!")
        }

        if (item.type === 'Potion' &&  item.effect) {
            return {
                ...player,
                stats: applyEffect(player.stats, item.effect),
                inventory: new Set (
                    [ ...player.inventory].filter(id => id !== itemId)
                )
            };
        }

        return player;

    }

}