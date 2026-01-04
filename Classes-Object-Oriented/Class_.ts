// Class 

class Person {
    readonly name: string; // cannot be changed once assigned
    protected age: number;  // accessible inside class and subclasses

    constructor(name: string, age: number) { 
        this.name = name;  
        this.age = age;
    } // this keyword refers to an object

    info() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

// Extends Person to create Student Class
class Student extends Person{
    private grades: number[] = [];  // only accessible inside the Student Class

    constructor(name: string, age: number, grades?: number[]) {
        super(name, age); // calls the parent constructor
        if(grades) this.grades = grades;
    }

    // method to add grades
    addGrade(grade: number) {
        this.grades.push(grade);
    }

    // method to calculate average
    computeAverage(): number {
        if (this.grades.length === 0) return 0  // if theres nothing on grades it will return 0
        const total = this.grades.reduce((sum, g) => sum + g, 0) / this.grades.length;
        return parseFloat(total.toFixed(2));
    }

    // Override info to include grades
    info() {
        super.info(); // call the parent method
        console.log(`Grades: ${this.grades.join(`, `) || "No Grades"}`)
        console.log(`Average: ${this.computeAverage()}`)
    }
}

// create instances
const Student1 = new Student("Seiju", 18, [99,89,100])
const Student2 = new Student("Hajime", 18)

Student1.addGrade(99) // push grades to Seiju
Student2.addGrade(85) // push grades to Hajime

Student1.info()
Student2.info()
