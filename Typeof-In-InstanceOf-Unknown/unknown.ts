// unknown vs any

let data: unknown = 42;

if (typeof data === "string") {
    console.log("String:", data.toUpperCase());
} else if (typeof data === "number") {
    console.log("Number:", data.toFixed(2));
} else {
    console.log("Unknown type:", data);
}

/* in any

let data: any = 42;
console.log(data.toUpperCase()); // Runtime error: 42.toUpperCase is not a function

// because 42 is not a string but a number

but in unknown we can do this

let data: unknown = 42;

if (typeof data === "string") {
    console.log(data.toUpperCase()); 
} else {
    console.log("Not a string"); // Handles other types safely
}

*/