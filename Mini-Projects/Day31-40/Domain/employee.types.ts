// employee.types.ts

import type { Brand } from "../Shared/brand.js";

export type EmployeeId = Brand<number, "EmployeeId">;
export type Salary = Brand<number, "Salary">;

export type Department = "Engineering" | "HR" | "Finance";

export type Employee = Readonly<{
    id: EmployeeId;
    name: string;
    department: Department
    salary: Salary
}>;