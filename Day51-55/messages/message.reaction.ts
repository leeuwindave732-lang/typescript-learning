// message.reaction.ts

import type { UserId } from "../core/brand.js";

export type Reaction = "❤️" | "👍" | "😂" | "😡";

export type MessageReaction = ReadonlyMap<UserId, Reaction>;

