// function overload with different return types

function getUser( id: number ): { id: number; name: string;};
function getUser( email: string ): { email: string; name: string};

// implementation
function getUser ( input: number | string ) {
    if ( typeof input === "number") {
        return { id: input, name: `User${input}`}
    } else {
        return { email: input, name: input.split("@")[0]} // return the part of the email before the @ as the nam
    }
}

// usage 
const userById = getUser(101);
const userByName = getUser("Seiju@gmail.com")

console.log(userById) // { id: 101, name: 'User101' }
console.log(userByName) // { email: 'Seiju@gmail.com', name: 'Seiju' }

