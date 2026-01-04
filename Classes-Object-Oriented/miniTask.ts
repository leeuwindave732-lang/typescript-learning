class Person {
    readonly name: string; // cannot be changed once assigned
    protected age: number // accessible inside class and subclasses

    public constructor(name: string, age: number) {
        this.name = name
        this.age = age
    } // this keyword refers to an object

    info() {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
    }
}

class Teacher extends Person {
    private grades: number[] = []; 

    public constructor(name: string, age: number, grades?: number[]) {
        super(name, age) // from the parent
        if(grades) this.grades = grades
    }

    protected getGrades() {
        return this.grades
    }

    addGrades(grade: number) {
        this.grades.push(grade)
    }

    // method to calculate average
    computeAverage(): number {
        if (this.grades.length === 0) return 0  // if theres nothing on grades it will return 0
        const total = this.grades.reduce((sum, g) => sum + g, 0) / this.grades.length;
        return parseFloat(total.toFixed(2));
    }

}

class Student extends Teacher {
    protected course: string;

    public constructor(name: string, age: number, course: string, grades?: number[]) {
        super(name, age, grades)
        this.course = course
    }
    // Override info to include grades
    info() {
        super.info(); // call the parent method
        console.log(`Course: ${this.course}`)
        console.log(`Grades: ${this.getGrades().join(`, `) || "No Grades"}`)
        console.log(`Average: ${this.computeAverage()}`)
        console.log('---------------------------------------')
    }
}

// create instances
const Student1 = new Student("Seiju", 18, "Computer Science", [99,89,100])
const Student2 = new Student("Hajime", 18, "Information Technology")

Student1.addGrades(99) // push grades to Seiju
Student2.addGrades(85) // push grades to Hajime

Student1.info()
Student2.info()