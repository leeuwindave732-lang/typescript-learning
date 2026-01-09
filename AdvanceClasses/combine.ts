// combine example: static + abstract + getter/setter

// Role interface 
interface RoleInfo {
    getRole(): string;
}

// abstract class
abstract class Person implements RoleInfo {
    // instance property
    protected age: number;

    // static property shared by all instance
    static species = "Homo Sapiens";

    constructor(public name: string, age: number) {
        this.age = age
    }

    // Abstract method must be implemented by subclasses
    abstract getRole(): string;

    // Getter / Setter
    get PersonAge() {
        return this.age;
    }

    set PersonAge(value: number) {
        if ( value < 0 ) throw new Error("Age cannot be negative");
        this.age = value;
    }

    info() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }

    // Static method
    static speciesInfo() {
        console.log(`All humans are ${Person.species}`)
    }
}

// Concrete subclass
class Teacher extends Person {
    constructor(name: string, age: number, private subject: string) {
        super(name, age);
    }

    getRole() {
        return "Teacher";
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}`)
    }
}

// Another subclass
class Student extends Person {
    constructor(name: string, age: number, private course: string) {
        super(name, age);
    }

    getRole() {
        return "Student";
    }

    study() {
        console.log(`${this.name} is studying ${this.course}`)
    }
}

// usage

const teacher = new Teacher("Mr. Kuma", 50, "CC102");
const student = new Student("Seiju", 18, "Computer Science");

teacher.info(); // Name: Mr. Kuma, Age: 50
student.info(); // Name: Seiju, Age: 18

teacher.teach(); // Mr. Kuma is teaching CC102
student.study(); // Seiju is studying Computer Science

console.log(teacher.getRole()); // Teacher
console.log(student.getRole()); // Student

student.PersonAge = 20; 
console.log(student.PersonAge); // 20

console.log(Person.species); // Homo Sapiens
Person.speciesInfo(); // All humans are Homo Sapiens
