// employee.state.ts

export type ActiveEmployee = {
    state: "ACTIVE";
};

export type OnLeaveEmployeee = {
    state: "ON_LEAVE";
    returnDate: Date;
}

export type TerminatedEmployee = {
    state: "TERMINATED";
    reason: string;
}

export type EmployeeState = 
    | ActiveEmployee
    | OnLeaveEmployeee
    | TerminatedEmployee;