// literal types

let status: "Active"|"Inactive"|"Graduated";

status = "Active";
status = "Inactive";

// status = "Pause";  X error

// using literal types in functions

type studentStatus = "Active" | "Inactive" | "Graduated"

function StudentInfo (
    name: string,
    age: number,
    status?: studentStatus  
) {
    console.log(`Students name: ${name}`);
    console.log(`Students age: ${age}`);
    console.log(`Students status: ${status}`);
};

StudentInfo("Seiju", 18, "Active" )

// IF YOU DO StudentsInfo("Seiju", 18, "INC") it will result to error because "INC" is not assignable to parameter of type