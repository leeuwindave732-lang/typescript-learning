/*
    What are decorators?
    Decorators are special functions that can be attached to classes,
    methods, properties, or parameters to modify behavior or add metadata. 
    They are mostly used for:

    Logging
    Validation
    Access control
    Dependency injection

    Enable decorators in TypeScript
    In your tsconfig.json:

    {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }

    if you dont have one just add it in compiler options in tsconfig.json

*/

// Class Decorator
// Runs once when the class is defined (not when you create an object).
function logClass(target: Function) {
    // target = the class itself (Student)
    console.log(`Class &{target.name} has been created`)
} 

// Method Decorator
// This decorator wraps a method and adds behavior before & after it runs
function logMethod(
    target: any, // prototype of the class (Student.prototype)
    propertyKey: string,  // name of the method (e.g. "updateName")
    descriptor: PropertyDescriptor // lets us change the method
) {
     // Save the original method
    const OriginalMethod = descriptor.value;
    // Replace the method with a new function
    descriptor.value = function(...args: any[]){
        // Runs BEFORE the original method
        console.log(`Calling ${propertyKey} with`, args);
        // Call the original method and keep "this" correct
        const results =OriginalMethod.apply(this, args)
        // Runs AFTER the original method
        console.log(`Result: `, results)
        // Return the original result
        return results;
    }
}

// Property Decorator
// This decorator makes a property read-only
function Readonly(target: any, propertyKey: string) {
    // Redefine the property so it cannot be changed
    Object.defineProperty(target, propertyKey, {
        writable: false // prevents reassignment
    })
}

@logClass // Logs when the class is created
class Student {
    @Readonly // Makes "id" read-only
    public readonly id: number;
    // Constructor runs when a new Student is created
    constructor(public name: string, public age: number, id: number) {
        // Allowed once (initial assignment)
        this.id = id
    }
    @logMethod // Logs before and after this method runs
    updateName(newName: string) {
        this.name = newName
    }
}

const student = new Student("Seiju", 18, 101)
// This would FAIL because "id" is read-only
// student.id = 999; 

student.updateName("Hajime")