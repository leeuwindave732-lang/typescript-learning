type User = {
    name: string,
    age: number,
    email: string,
    roles: 'Admin' | 'User' | 'Developer'
}

type UserPartial = Partial<User> // Optional Properties
const Partial:UserPartial = {
    roles: 'User'
}

type UserPick = Pick<User, 'roles'> // Pick with Role only
const Pick:UserPick = {
    roles: 'Admin'
}

type UserReadonly = Readonly<UserPartial> // Readonly with Partial
const Readonly:UserReadonly = {
    name: "Seiju",
    roles: 'Admin'
}

function UpdateObject<T, K extends keyof T>(obj: T, key: K, value: T[K]): T{
    return { ...obj, [key]: value}
}

const Admin: UserReadonly = {
    name: "Seiju",
    age: 18,
    email: "Seiju@Gmail.com",
    roles: "Admin"
}

const updated = UpdateObject(Admin, 'roles', 'Developer')

console.log(Partial) // roles: User
console.log(Pick) // roles: Admin
console.log(Readonly) // name: Seiju, roles: Admin
console.log(updated) // name: Seiju, age: 18, email: Seiju@Gmail.com, roles: Developer
