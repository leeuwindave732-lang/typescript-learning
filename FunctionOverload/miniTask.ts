// logger overload

function log(value: string):void;
function log(value: number):void;
function log(value: boolean):void;

function log(value: string | number | boolean) {
    console.log(`[LOG]:`, value)
}
// usage
log(123);
log("Seiju")
log(false)

// auth check overload

function authenticate(token: string): boolean ;
function authenticate(userId: number): boolean;

function authenticate(input: string | number) {
    return typeof input === "string"
        ? input.length > 10
        : input > 0;
}
// usage
console.log("Authenticate User:" ,authenticate("SeijuHaji"));
console.log("Authenticate UserId:" ,authenticate(101));

// repository fetch

function fetchEntity(id: number): { id: number };
function fetchEntity(name: string): { name: string };

function fetchEntity(input: number | string) {
    return typeof input === "number"
        ? { id: input }
        : { name: input };
    
}
// usage 
const fetchbyId = fetchEntity(101);
const fetchbyName = fetchEntity("Seiju")

fetchbyId.id
fetchbyName.name

console.log(fetchbyId.id)
console.log(fetchbyName.name)

/* output 
    [LOG]: 123
    [LOG]: Seiju
    [LOG]: false
    Authenticate User: false
    Authenticate UserId: true
    101
    Seiju
*/