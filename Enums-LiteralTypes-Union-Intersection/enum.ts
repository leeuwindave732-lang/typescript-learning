// enum 
// enum are great for fixed sets of value

enum StudentStatus {
    Active = "Active",
    Inactive = "Inactive",
    Graduated = "Graduated"
}

function StudentsInfo (
    name: string,
    age: number,
    status: StudentStatus
) {
    console.log(`Students name: ${name}`);
    console.log(`Students age: ${age}`);
    console.log(`Students status: ${status}`);
}

StudentsInfo("Seiju", 18, StudentStatus.Active); 
// in status it prints "Active" since i put StudentStatus.Active