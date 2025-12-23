// Union types (|)
// allow multiple types for example
// let id: string | number

type StudentGrades = number | "INC" | "DROP" 

function StudentInfo (
    name: string,
    age: number,
    grades?: StudentGrades
) {
    console.log(`Students name: ${name}`)
    console.log(`Students age: ${age}`)
    console.log(`Students grades: ${grades}`) 
}

StudentInfo("Seiju", 18, 99) 
/* the thing i do here is pretty much like the literal.ts but in this case
    i do the Union where it allows multiple types so when i do number or string it will not cause an error
    unless we do not put the assignable parameters, so when i do it like this 
    so when i put something in grades that are not 99, "INC", "DROP". IT WILL CAUSE AN ERROR */