/* 
    Function overloading allows you to define multiple
    signatures for a single function and provide one
    implementation that handles all defined signatures.
*/

/* What Function Overloads Do

    They allow you to:
    Define multiple type signatures
    Share one implementation
*/

/* Rules You Must Remember

    Overload signatures come first
    Only ONE implementation
    Implementation uses unions
    Return types are inferred from overloads
    Overloads are compile-time only
*/
function findUser(id: number): { id: number };
function findUser(email: string): { email: string };

function findUser( input: number | string ) {
    if ( typeof input === "number") {
        return { id: input }
    } 
    return { email: input}
}

const user1 = findUser(123)
user1.id
// user1.email - compile time error
const user2 = findUser("test@gmail.com")
user2.email
// user2.email - compile time error

console.log(user1)
console.log(user2)