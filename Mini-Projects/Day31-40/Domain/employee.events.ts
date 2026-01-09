import type { EmployeeId } from "./employee.types.js";

export type EmployeeEvent = 
    | { type: "HIRED", employeeId: EmployeeId}
    | { type: "PROMOTED", employeeId: EmployeeId}
    | { type: "PUT_ON_LEAVE", employeeId: EmployeeId}
    | { type: "TERMINATED", employeeId: EmployeeId}