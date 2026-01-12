// player.service.ts

import type { Player } from "./player.type.js";
import { PlayerId } from "../core/brand.js";

export class PlayerService {
    private players = new Map<PlayerId, Player>();

    createPlayer(id: PlayerId, name: string): Player {
        const player: Player = {
            PlayerId: PlayerId(id),
            name,
            level: 1,
            stats: {
                health: 100,
                mana: 50,
                strength: 10,
                defense: 5
            },
            inventory: new Set()
        };
        this.players.set(player.PlayerId, player);
        return player;
        }

        updatePlayer(player: Player) {
            this.players.set(player.PlayerId, player);
        }

        getPlayer(id: PlayerId): Player | undefined {
            const player =  this.players.get(id);
            if (!player) throw new Error("Player not found");
            return player;
        }
}