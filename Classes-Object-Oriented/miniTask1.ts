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
    // Map to track each student's grades
    private studentGrades: Map<Student, number[]> = new Map();

    // assign grades to a student
    addGrades(student: Student, grade: number) {
        const grades = this.studentGrades.get(student) || [];
        grades.push(grade)
        this.studentGrades.set(student, grades)
    }

    // computes student average
    computeAverage(student: Student): number {
        const grades = this.studentGrades.get(student) || [] // [] if theres nothing to add
        if (grades.length === 0) return 0  // if theres nothing on grades it will return 0
        const total = grades.reduce((sum, g) => sum + g, 0) / grades.length;
        return parseFloat(total.toFixed(2));
    }

    // get student grades
    getGrades(student: Student): number[] {
        return this.studentGrades.get(student) || []
    }

}

class Student extends Person {
    protected course: string;

    public constructor(name: string, age: number, course: string) {
        super(name, age)
        this.course = course
    }

    // Override info to include grades
    showinfo(teacher: Teacher) {
        super.info(); // call the parent method
        console.log(`Course: ${this.course}`)
        console.log(`Grades: ${teacher.getGrades(this).join(', ') || "No Grades"}`)
        console.log(`Average: ${teacher.computeAverage(this)}`)
        console.log('---------------------------------------')
    }
}

// create instances
const teacher = new Teacher("Mr. Tanaka", 45)

const Student1 = new Student("Seiju", 18, "Computer Science")
const Student2 = new Student("Hajime", 18, "Computer Science")
const Student3 = new Student("Jiro", 19, "Computer Science")

// add grades to the student
teacher.addGrades(Student1, 99);
teacher.addGrades(Student1, 89);
teacher.addGrades(Student2, 85);
teacher.addGrades(Student2, 92);
teacher.addGrades(Student3, 97);
teacher.addGrades(Student3, 100);

// display student info
Student1.showinfo(teacher)
Student2.showinfo(teacher)
Student3.showinfo(teacher)

//  compute class average
const students = [Student1, Student2, Student3];
const classAverage = students.reduce((sum, s) => sum + teacher.computeAverage(s), 0) / students.length;
console.log(`Class Average: ${classAverage.toFixed(2)}`);