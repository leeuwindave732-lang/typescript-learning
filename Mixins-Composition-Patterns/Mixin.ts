// Mixiins & Composition Patterns
// Mixins & Composition Patterns, are advanced OOP techniques in TypeScript
// This is a great alternative to inheritance-heavy patterns, allowing code reuse without deep hierarchies.

// base class 

class Person {
    constructor(public name: string, public age: number ) {}
        info() {
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        }
}

// Helper type for constructors
type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin for logging
function LoggerMixin<TBase extends Constructor<{ name: string }>>(BaseClass: TBase) {
    return class extends BaseClass {
        log(message:string) {
            console.log(`[LOG] ${this.name}: ${message}`)
        }
    };
}

// Mixin for role handling

function RoleMixin<TBase extends Constructor>(BaseClass: TBase) {
    return class extends BaseClass {
        private role: string = "User";

        setRole(role:string) {
            this.role = role;
        }

        getRole() {
            return this.role
        }
    };
}

// compose a new class using Mixins
class Employee extends RoleMixin(LoggerMixin(Person)) {
    constructor(name: string, age: number, public department: string) {
        super(name, age)
    }

    work() {
        this.log(`Working in ${this.department}`);
    }
}

// usage
const emp = new Employee("Seiju", 18, "Software Engineering")

emp.info();  // Name: Seiju, Age: 18
emp.setRole("Admin"); 
console.log(emp.getRole()); // Admin
emp.work(); // [LOG] Seiju: Working in Software Engineering
emp.log("Task completed") // [LOG] Seiju: Task completed
console.log("=====================================================")


const emp1 = new Employee("Hajime", 19, "Software Engineering")

emp1.info(); // Name: Hajime, Age: 19
console.log(emp1.getRole()) // User
emp1.work(); // [LOG] Hajime: Working in Software Engineering
emp1.log("Task incomplete") // [LOG] Hajime: Task incomplete