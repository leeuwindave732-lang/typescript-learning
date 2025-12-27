// in (objects)

type Students = { 
    name: string
}

type Graduation = {
    name: string
    graduationYear: number
}

function StudentValue(student: Students | Graduation) {
    if ("graduationYear" in student) //checks if the object has that property. 
    {   
        // if student has graduation year, its a Graduation type
        console.log(`Student name: ${student.name}`)
        console.log(`Graduation year: ${student.graduationYear}`);
    }
    else {
        // else, its still a student
        console.log(`Student name: ${student.name}`)
        console.log("stil studying")
    }
}

const Student1: Students = {
    name: "Seiju"
}

const Student2: Graduation = {
    name: "Hajime",
    graduationYear: 2025
}

StudentValue(Student1) // output: Student name: Seiju, still studying
StudentValue(Student2) // output: Student name: Hajime, Graduation year: 2025