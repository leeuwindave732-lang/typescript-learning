// guards

import { RoleMatrix, type RolePermission } from "./roles.js";

export function hasPermission (
    role: keyof typeof RoleMatrix,
    permission: RolePermission
) {
    const [r, p] = permission.split("_") as [keyof typeof RoleMatrix, string]

    if (r !== role) return false;
    return RoleMatrix[role].includes(p as any);
}