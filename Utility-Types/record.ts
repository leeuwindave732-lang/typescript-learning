// record

type RecordStudent = Record<string, string>; // Create a map of student IDs to student names:

const Student: RecordStudent = { 
        s1: "Seiju",
        s2: "Hajime" // error if we put s2: 123, since its a string
    } 

console.log(Student)

// Record creates a type for objects that act like a map, enforcing the same type for all keys and values

/* another example 
type StatusMessage = Record<"success" | "error", string>;

const messages: StatusMessage = {
    success: "Operation successful",
    error: "Something went wrong"
};
*/