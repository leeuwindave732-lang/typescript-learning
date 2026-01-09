// employee.policy.ts

import type { EmployeeState } from "./employee.state.js";
import type { Employee } from "./employee.types.js";

export function canBePromoted(state: EmployeeState): boolean {
    return state.state === "ACTIVE";
}

export function canBeOnLeave(State: EmployeeState): boolean {
    return State.state !== "ON_LEAVE"
}

export function canBeTerminated(state: EmployeeState): boolean {
    return state.state !== "TERMINATED";
}