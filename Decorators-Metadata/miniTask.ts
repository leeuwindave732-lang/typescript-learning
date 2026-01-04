// Runs once when the class is defined.
// Useful for logging, registration, or diagnostics.
function logClass(target: Function){
    console.log(`Class ${target.name} has been created`)
}

// Wraps a method so we can log inputs and outputs.
// Commonly used for debugging, analytics, or auditing.
function logMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const OriginalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with`, args)
        const result = OriginalMethod.apply(this, args)
        console.log(`Result`, result)
        return result
    }
        
}

// Attempts to prevent reassignment at runtime.
// Must be paired with `readonly` for full safety.
function Readonly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false
    }) 
}
// Base class shared by all people in the system.
// Avoids duplication of name and age logic.
@logClass 
class Person {
    public name: string; 
    protected age: number 

    public constructor(name: string, age: number) {
        this.name = name
        this.age = age
    } 
    
    // Basic info display shared by subclasses
    info() {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
    }
}

// Teacher manages student grades.
@logClass
class Teacher extends Person{
    @Readonly
    // Unique identifier, never changes after creation
    public readonly EmployeeId: number;
    // Stores grades per student using object identity
    private studentGrades: Map<Student, number[]> = new Map();

    constructor( name: string, age: number, id: number) {
        super(name, age)
        this.EmployeeId = id
    }
    
    @logMethod
    updateName(newName: string) {
        this.name = newName
    }

    @logMethod
    addGrades(student: Student, grade: number) {
        const grades = this.studentGrades.get(student) || [];
        grades.push(grade)
        this.studentGrades.set(student, grades)
    }

    // computes student average
    @logMethod
    computeAverage(student: Student): number {
        const grades = this.studentGrades.get(student) || [] 
        if (grades.length === 0) return 0  
        const total = grades.reduce((sum, g) => sum + g, 0) / grades.length;
        return parseFloat(total.toFixed(2));
    }

    // get student grades
    @logMethod
    getGrades(student: Student): number[] {
        return this.studentGrades.get(student) || []
    }
    toString() {
    return `${this.constructor.name}:(${this.name}, ${this.age})`;
    }

}

@logClass
class Student extends Person{
    @Readonly
    public readonly StudentID: number; 

    constructor( name: string,  age: number, id: number) {
        super(name, age)
        this.StudentID = id
    }
    @logMethod
    updateName(newName: string) {
        this.name = newName
    }
    // Displays academic info using teacher's data
    showinfo(teacher: Teacher) {
        console.log(`Student name: ${this.name}`)
        console.log(`Student age: ${this.age}`)
        console.log(`Grades: ${teacher.getGrades(this).join(', ') || "No Grades"}`)
        console.log(`Average: ${teacher.computeAverage(this)}`)
        console.log('---------------------------------------')
    }
}
// Create teacher with identity and metadata
const teacher = new Teacher("Mr. Tanaka", 45, 101) // issue here

// Create student
const student = new Student("Seiju", 18, 101)

// Teacher records grades
teacher.addGrades(student, 99);
teacher.addGrades(student, 89);


student.updateName("Hajime")
student.showinfo(teacher)
console.log(`${teacher.toString()}`) 

/* output: 
    Class Person has been created
    Class Teacher has been created
    Class Student has been created
    Calling addGrades with [ Student { name: 'Seiju', age: 18, StudentID: 101 }, 99 ]
    Result undefined
    Calling addGrades with [ Student { name: 'Seiju', age: 18, StudentID: 101 }, 89 ]
    Result undefined
    Calling updateName with [ 'Hajime' ]
    Result undefined
    Student name: Hajime
    Student age: 18
    Calling getGrades with [ Student { name: 'Hajime', age: 18, StudentID: 101 } ]
    Result [ 99, 89 ]
    Grades: 99, 89
    Calling computeAverage with [ Student { name: 'Hajime', age: 18, StudentID: 101 } ]
    Result 94
    Average: 94
    ---------------------------------------
    Teacher:(Mr. Tanaka, 45)


*/