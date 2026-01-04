interface IPerson {
    name: string,
    age: number,
    info(): void
}

abstract class Person implements IPerson {
    constructor(public name: string, public age: number) {}

    info(){
        console.log(`Name: ${this.name}`); 
        console.log(`Age: ${this.age}`);
    }

    abstract roleInfo(): void; 
}

class Teacher extends Person {
    private students: string[] = [];
    private grades: Map<string, number[]> = new Map(); 

    addStudent(name: string) {
        this.students.push(name);
        this.grades.set(name, []); 
    }

    addGrade(student: string, grade: number) {
        const studentGrades = this.grades.get(student);
        if (studentGrades) studentGrades.push(grade);
    }

    computeAverage(student: string): number {
        const studentGrades = this.grades.get(student) || [];
        if (studentGrades.length === 0) return 0;
        const total = studentGrades.reduce((sum, g) => sum + g, 0) / studentGrades.length;
        return parseFloat(total.toFixed(2));
    }

    roleInfo() {
        console.log(`Teacher with students: ${this.students.join(', ')}`);
    }
}

class Student extends Person {
    constructor(name: string, age: number, public course: string) {
        super(name, age);
    }

    roleInfo() {
        super.info()
        console.log(`Student enrolled in: ${this.course}`);
        console.log("---------------------------------")
    }
}

const teacher = new Teacher("Mr Tanaka", 18)
const seiju = new Student("Seiju", 18, "Computer Science")
const hajime = new Student("Hajime", 18, "Computer Science")
const jiro = new Student("Jiro", 18, "Information Technology")

seiju.roleInfo()
hajime.roleInfo()
jiro.roleInfo()
teacher.roleInfo(); 

teacher.addStudent(seiju.name);
teacher.addGrade(seiju.name, 95);
teacher.addGrade(seiju.name, 99);
console.log(`Seiju average: ${teacher.computeAverage(seiju.name)}`)

teacher.addStudent(hajime.name);
teacher.addGrade(hajime.name, 95);
teacher.addGrade(hajime.name, 89);
console.log(`Hajime average: ${teacher.computeAverage(hajime.name)}`)

teacher.addStudent(jiro.name);
teacher.addGrade(jiro.name, 95);
teacher.addGrade(jiro.name, 100);
console.log(`Jiro average: ${teacher.computeAverage(jiro.name)}`)

/* output: 
    Name: Seiju
    Age: 18
    Student enrolled in: Computer Science
    ---------------------------------
    Name: Hajime
    Age: 18
    Student enrolled in: Computer Science
    ---------------------------------
    Name: Jiro
    Age: 18
    Student enrolled in: Information Technology
    ---------------------------------
    Teacher with students:
    Seiju average: 97
    Hajime average: 92
    Jiro average: 97.5
*/