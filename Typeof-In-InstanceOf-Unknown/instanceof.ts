// instanceof (classes)

class User {
    constructor (public name: string) {}
}

class Admin extends User {
    isAdmin = true;
}

function checkUser(user: User) {
    if( user instanceof Admin) {
        console.log(`${user.name} is an ADMIN`);
    }
    else {
        console.log(`${user.name} is a USER`);
    }
}

// CREATE INSTANCES
const User1 = new User("Seiju"); 
const User2 = new Admin("Hajime")

checkUser(User1) // Output: Seiju is a USER
checkUser(User2) // output: Hajime is an ADMIN