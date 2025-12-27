// typeof narrowing (primitives)


// typeof is used to narrow the type in TypeScript.

function StudentValue (value: string | boolean | number) {
    if (typeof value === "string") {
        // If value is a string, convert it to uppercase and log it
        console.log(value.toUpperCase());
    }
    else if (typeof value === "boolean"){
        console.log(value)
    }
    else {
        // If value is a number, format it to 2 decimal places and log it
        console.log(value.toFixed(2))
    }
}

StudentValue("Seiju") // output: SEIJU
StudentValue(true) // output: true
StudentValue(3.14159) // output: 3.14
StudentValue("Hajime") // output: HAJIME