// item.state.ts

export type ItemState =
    | { state: "AVAILABLE" }
    | { state: "EQUIPPED", equippedBy: number }
    | { state: "IN-INVENTORY", ownerId: number}
    | { state: "BROKEN", brokenSince: Date}