// Day 31 – 40 Mini Project
// TypeSafe Employee Lifecycle Management System

/* Requirements:

    Architecture & Layers
    - Apply layered backend architecture (Controller → Service → Repository)
    - Keep responsibilities strictly separated
    - Controllers must only accept UNTRUSTED input (DTOs)
    - Services must only operate on TRUSTED domain data

    DTO & Validation
    - Define DTOs for employee actions:
        • hire
        • promote
        • put on leave
        • return from leave
        • terminate
    - Use type guards to validate DTOs at runtime
    - Prevent invalid state transitions from entering the domain

    Domain & Business Logic
    - Model Employee entities with strong TypeScript types
    - Represent employee lifecycle using explicit states:
        ACTIVE, ON_LEAVE, TERMINATED
    - Enforce business rules in the Service layer:
        • TERMINATED employees cannot change state
        • Only ACTIVE employees can be promoted
        • Only ON_LEAVE employees can return
    - Avoid business logic in controllers and repositories

    State Machine Enforcement
    - Define valid state transitions explicitly
    - Reject invalid transitions at runtime
    - Use exhaustive switch checks to ensure compile-time safety
    - Compiler must fail if a new state is added but not handled

    Employee Events (Audit Log)
    - Emit events for every meaningful change:
        HIRED, PROMOTED, PUT_ON_LEAVE, RETURNED_FROM_LEAVE, TERMINATED
    - Events must be immutable
    - Each event must contain:
        • employeeId
        • event type
        • timestamp
    - Preserve event order for auditing

    Repository Pattern
    - Implement an EmployeeRepository using in-memory storage (Map)
    - Support basic persistence operations (add, get, update)
    - Never enforce business rules
    - Never throw errors — return Result<T, E> instead

    Error Handling
    - Use a Result<T, E> pattern for all operations
    - Define domain-specific error unions:
        NOT_FOUND, INVALID_STATE, INVALID_TRANSITION, ALREADY_EXISTS
    - Handle all errors explicitly
    - No silent failures

    Type Safety
    - Use branded types for:
        • EmployeeId
        • Salary
    - Use utility types (Partial, Readonly)
    - Enforce strict compiler options:
        strict, noImplicitAny, strictNullChecks
    - No usage of `any`

    Advanced TypeScript
    - Use discriminated unions for states and events
    - Apply exhaustive checks using `never`
    - Use function overloads where behavior differs by input
    - Demonstrate type-safe event handling

    Configuration
    - Use a strict tsconfig.json configuration
    - Demonstrate how compiler options improve safety
    - Ensure invalid states fail at compile time when possible

    Application Entry
    - Keep main.ts minimal and declarative
    - Wire repository, service, and controller together
    - Demonstrate full employee lifecycle:
        hire → promote → leave → return → terminate
    - Log state changes and audit events to the console

*/


import { EmployeeRepository } from "./Application/employee.repository.js";
import { EmployeeService } from "./Application/employee.service.js";
import type { EmployeeId, Salary } from "./Domain/employee.types.js";

const asEmployeeId = (n: number) => n as EmployeeId;
const asSalary = (n: number) => n as Salary;

const repo = new EmployeeRepository();
const service = new EmployeeService(repo);

service.hire({
    id: asEmployeeId(111),
    name: "Seiju Batumbakal",
    department: "Engineering",
    salary: asSalary(50000)
});

service.hire({
    id: asEmployeeId(201),
    name: "Jiro Pato",
    department: "Finance",
    salary: asSalary(70000)
});

service.hire({
    id: asEmployeeId(102),
    name: "Hajime Pedro",
    department: "HR",
    salary: asSalary(100000)
});

service.onLeave(asEmployeeId(102), new Date("2026-02-18"))

service.promote(asEmployeeId(111), asSalary(65000));


service.terminate(asEmployeeId(201), "Company Restructuring");
console.log("=============================================================================")
console.log(repo.list());
console.log("=============================================================================")
console.log(service.auditLog());
console.log("=============================================================================")


/* Output:
        =============================================================================
        [
        {
            data: {
            id: 111,
            name: 'Seiju Batumbakal',
            department: 'Engineering',
            salary: 65000
            },
            state: { state: 'ACTIVE' }
        },
        {
            data: {
            id: 201,
            name: 'Jiro Pato',
            department: 'Finance',
            salary: 70000
            },
            state: { state: 'TERMINATED', reason: 'Company Restructuring' }
        },
        {
            data: { id: 102, name: 'Hajime Pedro', department: 'HR', salary: 100000 },
            state: { state: 'ON_LEAVE', returnDate: 2026-02-18T00:00:00.000Z }
        }
        ]
        =============================================================================
        [
        { type: 'HIRED', employeeId: 111 },
        { type: 'HIRED', employeeId: 201 },
        { type: 'HIRED', employeeId: 102 },
        { type: 'PUT_ON_LEAVE', employeeId: 102 },
        { type: 'PROMOTED', employeeId: 111 },
        { type: 'TERMINATED', employeeId: 201 }
        ]
        =============================================================================
*/