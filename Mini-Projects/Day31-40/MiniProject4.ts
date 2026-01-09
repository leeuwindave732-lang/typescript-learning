// Day 31-40 Mini Project
// Employee Management System


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