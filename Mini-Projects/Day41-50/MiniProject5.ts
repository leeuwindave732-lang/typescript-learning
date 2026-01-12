// main.ts

// main.ts
// Day 41 – 50 Mini Project
// RPG Inventory & Item System

/* Requirements:

    Architecture & Layers
    - Keep responsibilities separated: PlayerService, InventoryService, CraftingService
    - EventBus handles all domain events
    - Main.ts is declarative, only orchestrates actions

    DTO & Validation
    - Player creation uses PlayerId branding
    - Items use ItemId branding
    - Inventory operations check for ownership and existence

    Domain & Business Logic
    - Player entity with level, stats, and inventory
    - Item entity with type, rarity, and effect
    - Crafting requires components in inventory and player level
    - Using items applies their effects to player stats
    - Equipping items modifies player stats

    Events & Audit Log
    - EventBus emits events for:
        • ItemUsed
        • ItemEquipoed
        • ItemCrafted
    - Events are immutable and logged in order

    Type Safety
    - Branded types: PlayerId, ItemId
    - Discriminated unions for item effects
    - Strict TypeScript types for players, items, and stats

    Application Entry
    - main.ts demonstrates full flow:
        • create player
        • register items
        • add items to inventory
        • use potion
        • equip weapon
        • craft new item
        • log all events
*/


import { PlayerService } from "./Player/player.service.js";
import { InventoryService } from "./inventory/inventory.service.js";
import { CraftingService } from "./inventory/crafting.service.js";
import { ItemId, PlayerId} from "./core/brand.js";
import { ItemEventBus } from "./events/domain.event.js";
import type { Item } from "./Item/item.type.js";
import type { Player } from "./Player/player.type.js";
import { applyEffect } from "./Item/items.effects.js";



const events = new ItemEventBus();
const players = new PlayerService();
const inventory = new InventoryService();
const crafting = new CraftingService(events);

// create player
const player1 = players.createPlayer(PlayerId(1), "Seiju");
console.log("Player Created: ", player1)

// register items

const sword: Item = {
    id: ItemId(1),
    name: "Phoenix Sword",
    type: "Weapon",
    rarity: "Legendary",
    itemEffect: { effect: "StrengthBoost", amount: 5}
}

const potion: Item = {
    id: ItemId(2),
    name: "Deadly Potion",
    type: "Potion",
    rarity: "Rare",
    itemEffect: { effect: "HealthBoost", amount: 5}
}

const shield: Item = {
    id: ItemId(3),
    name: "Medusa",
    type: "Weapon",
    rarity: "Rare",
    itemEffect: { effect: "DefenseBoost", amount: 5}
}

// register item in inventory & crafting service

inventory.registerItem(sword, sword.itemEffect)
inventory.registerItem(potion, potion.itemEffect)
inventory.registerItem(shield, shield.itemEffect)

crafting.registerItem(sword, sword.itemEffect, 1)
crafting.registerItem(potion, potion.itemEffect, 1)
crafting.registerItem(shield, shield.itemEffect, 2)

// add items to player inventory
let updatePlayer = inventory.addItem(player1, sword.id);
updatePlayer = inventory.addItem(updatePlayer, potion.id);
updatePlayer = inventory.addItem(updatePlayer, shield.id);

console.log("Player inventory after adding items:", updatePlayer.inventory);

// player uses a potion
updatePlayer = inventory.userItem(updatePlayer, potion.id);
console.log("Player stats after using potion:", updatePlayer.stats);
console.log("Player inventory after using potion:", updatePlayer.inventory);

// Player equips a sword via crafting service
updatePlayer = crafting.useItem(updatePlayer, sword.id);
console.log("Player stats after equipping sword:", updatePlayer.stats);
console.log("Player inventory after equipping sword:", updatePlayer.inventory);

// Crafting a new Item
crafting.registerItem(
    {
        id: ItemId(4),
        name: "Legendary Wolf Sword",
        type: "Weapon",
        rarity: "Legendary",
        itemEffect: { effect: "StrengthBoost", amount: 100}
    },
    {
        effect: "StrengthBoost", amount: 15
    },
    1
)

// level up the player
updatePlayer = { ...updatePlayer, level: 100 };


// ensure player has the components
updatePlayer = inventory.addItem(updatePlayer, sword.id);
updatePlayer = inventory.addItem(updatePlayer, shield.id);

updatePlayer = crafting.craftItem(updatePlayer, [sword.id, shield.id], ItemId(4));
console.log("Player inventory after crafting Legendary Sword:", updatePlayer.inventory);

console.log("All events emitted:");
console.log(events.getAll());



/* Output: 
        Player Created:  {
        PlayerId: 1,
        name: 'Seiju',
        level: 1,
        stats: { health: 100, mana: 50, strength: 10, defense: 5 },
        inventory: Set(0) {}
        }
        Player inventory after adding items: Set(3) { 1, 2, 3 }
        Player stats after using potion: { health: 105, mana: 50, strength: 10, defense: 5 }
        Player inventory after using potion: Set(2) { 1, 3 }
        [EVENT] { type: 'ItemEquipoed', playerId: 1, itemId: 1 }
        Player stats after equipping sword: { health: 105, mana: 50, strength: 15, defense: 5 }
        Player inventory after equipping sword: Set(1) { 3 }
        C:\Users\Dave\Downloads\typescript learning\Mini-Projects\Day41-50\inventory\crafting.service.ts:28
                        throw new Error("Player missing crafting components")
                            ^

        Error: Player missing crafting components
            at CraftingService.craftItem (C:\Users\Dave\Downloads\typescript learning\Mini-Projects\Day41-50\inventory\crafting.service.ts:28:23)
            at <anonymous> (C:\Users\Dave\Downloads\typescript learning\Mini-Projects\Day41-50\MiniProject5.ts:93:25)
            at ModuleJob.run (node:internal/modules/esm/module_job:343:25)
            at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:665:26)
            at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)

        Node.js v22.21.0
        PS C:\Users\Dave\Downloads\typescript learning\Mini-Projects\day41-50> npx tsx MiniProject5.ts
        Player Created:  {
        PlayerId: 1,
        name: 'Seiju',
        level: 1,
        stats: { health: 100, mana: 50, strength: 10, defense: 5 },
        inventory: Set(0) {}
        }
        Player inventory after adding items: Set(3) { 1, 2, 3 }
        Player stats after using potion: { health: 105, mana: 50, strength: 10, defense: 5 }
        Player inventory after using potion: Set(2) { 1, 3 }
        [EVENT] { type: 'ItemEquipoed', playerId: 1, itemId: 1 }
        Player stats after equipping sword: { health: 105, mana: 50, strength: 15, defense: 5 }
        Player inventory after equipping sword: Set(1) { 3 }
        [EVENT] { type: 'ItemCrafted', playerId: 1, itemId: 4 }
        Player inventory after crafting Legendary Sword: Set(1) { 4 }
        All events emitted:
        [
        { type: 'ItemEquipoed', playerId: 1, itemId: 1 },
        { type: 'ItemCrafted', playerId: 1, itemId: 4 }
        ]
*/