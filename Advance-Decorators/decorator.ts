// Enable in tsconfig.json:
// "experimentalDecorators": true,
// "emitDecoratorMetadata": true


/*
    - Class Decorator = log, register, or modify classes when defineds
    - Property Decorators = enforce rules like readonly, validation or metadata
    - Method Decorators = wrap method calls to log, validate, or modify behavior
    - Parameter Decorators = inspect arguments, useful for dependecy injection frameworks
    - Decorator Factories - you can create configurable decorators
*/

// Class Decorator

function logClass(target: Function) {
    console.log(`Class created: ${target.name}`)
}


// Property Decorator

function Readonly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
        configurable: false,
    });
}


// Method Decorator

function logMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with args:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Result:`, result);
        return result;
    };
}

// Parameter Decorator

function logParameter( target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter at index ${parameterIndex} of ${propertyKey} is decorated`)
}

// Using Decorators

@logClass
class Employee {
    @Readonly
    public readonly id: number;


    constructor(id: number, name: string, public role: string) {
        this.id = id;
    }

    @logMethod
    promote(@logParameter newRole: string) {
        this.role = newRole;
        return this.role;
    }
}

// usage

const emp1 = new Employee(101, "Seiju", "Developer")

console.log(emp1.id)
emp1.promote("Admin")

/* 
    Parameter at index 0 of promote is decorated
    Class created: Employee
    101
    Calling promote with args: [ 'Admin' ]
    Result: Admin
*/