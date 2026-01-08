// Generics

function identity<T>(value: T): T {
    return value;
}


const num = identity(123);
const str = identity("Seiju");
const bool = identity(true);

console.log(num,str,bool);

// generic array function: returns the first element
function firstElemenet<T>(arr: T[]): T | undefined {
    return arr[0]
}

const numbers = [1, 2, 3];
const firstNum = firstElemenet(numbers);

const names = ["Seiju", "Hajime"]
const firstName = firstElemenet(names)

console.log(firstNum, firstName)

// generic interface

interface ApiResponse<T> {
    data: T;
    success: boolean;
    error?: string;
}

const userResponse: ApiResponse<{ id: number, name: string }> = {
    data: { id: 1, name: "Seiju"},
    success: true
}

const studentResponse: ApiResponse<{ id: number, grades: number[] }> = {
    data: { id: 1, grades: [99, 100, 95]},
    success: true
}

console.log(userResponse,studentResponse)


// generics class
class Repository<T extends { id: number }> {
    private data: Map<number, T> = new Map();

    add(item: T): void {
        this.data.set(item.id, item);
    }

    get(id: number): T | undefined {
        return this.data.get(id);
    }

    list(): T[] {
        return Array.from(this.data.values());
    }
}

type User = {
    id: number,
    name: string
};

const userRepo = new Repository<User>();
userRepo.add({ id: 101, name: "Seiju" });
userRepo.add({ id: 102, name: "Hajime" });

console.log(userRepo.get(1));
console.log(userRepo.list());

/* output:
    123 Seiju true
    1 Seiju
    { data: { id: 1, name: 'Seiju' }, success: true } { data: { id: 1, grades: [ 99, 100, 95 ] }, success: true }
    undefined
    [ { id: 101, name: 'Seiju' }, { id: 102, name: 'Hajime' } ] 
*/