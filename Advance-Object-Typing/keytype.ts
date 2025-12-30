// keyof and typeof

const statusMap = {
    Active: "Active",
    Inactive: "Inactive",
    Graduated: "Graduated"
} as const;
// as const makes it readonly and literal types instead of just string.
// Without as const, TypeScript would treat the values as string instead of "Active" | "Inactive" | "Graduated".

type StatusKey = keyof typeof statusMap;
// "Active" | "Inactive" | "Graduated"

/*  keyof gives you all property names of a type
    typeof lets you use a value as a type
    Combined → TypeScript now knows the exact allowed strings you can use
*/


const currentStatus: StatusKey = "Active";   // OK
// const wrongStatus: StatusKey = "Pending";   // Error

// You can also accesss the value type

type StatusValue = typeof statusMap[StatusKey];

const val: StatusValue = statusMap.Active; 

console.log(currentStatus) // active
console.log(val) // active

// typeof → converts a value to a type

// keyof → extracts all keys of a type

