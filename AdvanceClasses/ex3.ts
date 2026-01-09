// abstract classes 
// An abstract class is typically used to define common behaviors for derived classes to extend. 
// Unlike a regular class, an abstract class cannot be instantiated directly.

// An Abstract class has at least one abstract method.
// To use an abstract class, you need to inherit it and provide the implementation for the abstract methods.
abstract class Animal {
    constructor(protected name: string){}

        // concrete method
        info() {
            console.log(`Animal: ${this.name}`)
        }

        // abstract method - must be implemented by subclasses  
        abstract speak(): void;
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} says: Woof!`)
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} says: Meow!`)
    }
}

// create dog
const dog = new Dog("Blackey");
const cat = new Cat("Whitey");

dog.info(); // Animal: Blackey
dog.speak(); // Blackey says: Woof!
dog.info(); // Animal: Whitey
dog.speak(); // Whitey says: Meow!