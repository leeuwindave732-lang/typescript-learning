import type { Employee, EmployeeId, Salary } from "../Domain/employee.types.js";
import type { EmployeeState } from "../Domain/employee.state.js";
import { canBeOnLeave, canBePromoted, canBeTerminated } from "../Domain/employee.policy.js";
import type { EmployeeEvent } from "../Domain/employee.events.js";
import { EmployeeRepository } from "./employee.repository.js";


export class EmployeeService {
    private events: EmployeeEvent[] = [];

    constructor(private repo: EmployeeRepository) {}

    hire(employee: Employee) {
        const state: EmployeeState = { state: "ACTIVE"};
        this.repo.save({ data: employee, state})
        this.events.push({ type: "HIRED", employeeId: employee.id})
    }

    promote(id: EmployeeId, newSalary: Salary) {
        const stored = this.repo.get(id);
        if(!stored) return;

        if(!canBePromoted(stored.state)) return;

        const updated: Employee = {
            ...stored.data,
            salary: newSalary
        }

        this.repo.save({ ...stored, data: updated });
        this.events.push({ type: "PROMOTED", employeeId: id})
    }

    onLeave(id: EmployeeId, returnDate: Date) {
        const stored = this.repo.get(id);
        if(!stored) return;

        if(!canBeOnLeave(stored.state)) return;

        this.repo.save({
            ...stored,
            state: { state: "ON_LEAVE", returnDate}
        });

        this.events.push({ type: "PUT_ON_LEAVE", employeeId: id})
    }

    terminate(id: EmployeeId, reason: string) {
        const stored = this.repo.get(id);
        if(!stored) return;

        if(!canBeTerminated(stored.state)) return;

        this.repo.save({
            ...stored,
            state: { state: "TERMINATED", reason}
        });

        this.events.push({ type: "TERMINATED", employeeId: id })
    }

    auditLog() {
        return [...this.events]
    }
}