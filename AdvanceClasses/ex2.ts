// getter & setters
// A getter method returns the value of the property’s value. A getter is also called an accessor.
// A setter method updates the property’s value. A setter is also known as a mutator.

// A getter method starts with the keyword get and a setter method begins with the keyword set.
class Person {
    private _age: number;

    constructor(private name: string, age: number) {
        this._age = age;
    }

    // getter for age

    get age() {
        return this._age;
    }

    // setter with validation
    set age(value: number) {
        if (value < 0 || value > 120 ) {
            throw new Error("Invalid Age!")
        }
        this._age = value;
    }

    info() {
        console.log(`${this.name} is ${this._age} years old`)
    }
}

const p = new Person("Seiju", 18); 
p.info();  // Seiju is 18 years old
p.age = 25; 
p.info(); // Seiju is 25 years old