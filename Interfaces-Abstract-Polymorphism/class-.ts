/*  Interfaces
    Define a contract for an object or class.
    Classes implementing an interface must implement all its members.

    Abstract Classes
    Cannot be instantiated directly.
    Can have implemented methods and abstract methods.
    Useful for shared behavior among multiple subclasses.

    Polymorphism
    Ability to treat different classes that share a common interface/base class as the same type.
    Example: Person can be Student or Teacher, but you can store them together as Person[].
*/

// interface for basic info

interface IPerson {
    name: string,
    age: number,
    info(): void
}


// abstract class implements some shared behavior
// abstract class means you cannot create a Person directly. You must create a subclass like Teacher or Student.
abstract class Person implements IPerson {
    // shortcut
    // public name automatically creates a property this.name.
    // public age automatically creates a property this.age.
    constructor(public name: string, public age: number) {}

    info(){
        console.log(`Name: ${this.name}`); 
        console.log(`Age: ${this.age}`);
    }

    // abstract method: subclasses must implement
    abstract roleInfo(): void; // force subclasses to define their own version.
}

// Teacher inherits from Person → it gets name, age, and the info() method automatically.
class Teacher extends Person {
    // only the Teacher class can see or modify this list.
    private students: string[] = [];
    
    // allows adding a student to the teacher’s list.
    addStudent(name: string) {
        this.students.push(name);
    }

    roleInfo() {
        // required because Person defined it as abstract. Shows the teacher’s students.
        console.log(`Teacher with students: ${this.students.join(', ')}`)
    }
}

class Students extends Person {
    // Each Student has a course in addition to name and age
    constructor( name: string, age: number, public course: string) {
        super(name, age); // calls the constructor of the parent class (Person).
    }

    roleInfo() {
        // implemented to show the student’s course.
        console.log(`Student enrolled in: ${this.course}`) 
    }
}

// Polymorphism = “many forms”.
const people: Person[] = [
    new Teacher(
        "Mr Tanaka",
        45
    ),
    new Students(
        "Seiju",
        18,
        "Computer Science"
    ),
    new Students(
        "Hajime",
        18,
        "Computer Science"
    ),
    new Students(
        "Jiro",
        18,
        "Information Technology"
    )
]

// interacting with all using polymorphism
people.forEach( p => {
    p.info();  // shared method
    p.roleInfo(); // specific implementation using the abstract
    console.log('--------------------------')
})


// adding students to a teacher

const teacher = people[0] as Teacher; // Mr. Tanaka
teacher.addStudent("Seiju")
teacher.addStudent("Hajime")
teacher.roleInfo()