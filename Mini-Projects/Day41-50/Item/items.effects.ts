// items.effects.ts

// player stats
export type PlayerStats = Readonly<{
    health: number;
    mana: number;
    strength: number;
    defense: number;
}>;

// item effects 
export type ItemEffect =
    | { effect: "HealthBoost", amount: number }
    | { effect: "ManaBoost", amount: number }
    | { effect: "StrengthBoost", amount: number }
    | { effect: "DefenseBoost", amount: number }

export function applyEffect(
    stats: PlayerStats,
    effect: ItemEffect
): PlayerStats {
    switch (effect.effect) {
        // apply the effect based on its type
        case "HealthBoost":
            return { ...stats, health: stats.health + effect.amount };
        case "ManaBoost":
            return { ...stats, mana: stats.mana + effect.amount };
        case "StrengthBoost":
            return { ...stats, strength: stats.strength + effect.amount };
        case "DefenseBoost":
            return { ...stats, defense: stats.defense + effect.amount };
    }
}