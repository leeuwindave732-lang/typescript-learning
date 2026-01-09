// employee.repository.ts

import type { Employee, EmployeeId } from "../Domain/employee.types.js";
import type { EmployeeState } from "../Domain/employee.state.js";4

export type StoredEmployee = {
    data: Employee;
    state: EmployeeState;
};

export class EmployeeRepository {
    private store = new Map<EmployeeId, StoredEmployee>();

    save(employee: StoredEmployee) {
        this.store.set(employee.data.id, employee)
    }

    get(id: EmployeeId): StoredEmployee | undefined {
        return this.store.get(id)
    }

    list(): StoredEmployee[] {
        return [...this.store.values()];
    }
}