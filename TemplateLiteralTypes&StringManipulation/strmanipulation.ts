// string manipulation types
type name = "Seiju" 

type Upper = Uppercase<name> // SEIJU
type Lower = Lowercase<name> // seiju
type Capital = Capitalize<name> // Seiju
type Uncap = Uncapitalize<name> // seiju


// create an event handler type
type Method = "GET" | "POST";
type Route = `${Method} /api/students`;

const route: Route = "GET /api/students"

console.log(route)