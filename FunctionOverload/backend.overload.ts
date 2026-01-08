// overload in backend

/* controllers
function respond( status: 200, data: object): void;
function respond( status: 400, message: string): void;

function respond( status: number, payload: unknown) {
    console.log(status, payload)
}
*/

/* Repository Fetch APIs

type User = {
    id: number
    email: string
}
function getUser(id: number): User;
function getUser(email: string): User | null;

*/

/* Validation
function parse(value: string): string;
function parse(value: number): number;
*/

/* Overloads vs Generics (Critical Difference)
Generics:
function wrap<T>(value: T): T {
    return value;
}

overloads:
function wrap(value: string): string[];
function wrap(value: number): number;

function wrap(value: string | number) {
    return typeof value === "string"
        ? value.split("")
        : value;
}
*/