/* Understand TypeScript compiler options, strict mode, and how configuration affects safety.

Topics to learn:

        strict mode
        strictNullChecks
        noImplicitAny
        target (ES5, ES6, ESNext)
        module (CommonJS, ESNext)
        esModuleInterop
        forceConsistentCasingInFileNames
        skipLibCheck

*/

/* strict and strictNullChecks
    let name: string | null = null;

    // strictNullChecks prevents you from accessing null directly
    // console.log(name.length); // Error: Object is possibly 'null'

    // Fix with null check
    if (name !== null) {
        console.log(name.length);
}

// Optional chaining (modern TS + ES2020)
    console.log(name?.length); // safe
    */

    /* noImplicitAny
    //  Will error because TS cannot infer type
    function add(a, b) {
        return a + b;
    }

    //  Explicit types prevent implicit any
    function addTyped(a: number, b: number): number {
        return a + b;
}
*/

/* target: ES2020 & modern JS features
    const numbers = [1, 2, 3];

    // Optional chaining (ES2020)
    console.log(numbers?.[0]); //  works

    // Nullish coalescing
    const value = null ?? "default";
    console.log(value); // "default"
*/

/* module: ESNext & esModuleInterop

    file1.ts
    export const greet = (name: string) => `Hello, ${name}`;


    file2.ts
    import { greet } from "./file1.js";
    console.log(greet("Seiju")); //  works with ES modules


    Node.js CommonJS fallback (with esModuleInterop)

    // import * as fs from "fs"; // Without esModuleInterop, sometimes you need * as
    import fs from "fs"; // With esModuleInterop, simpler import works
*/

/* forceConsistentCasingInFileNames

    Ensures you don’t accidentally import User.ts as user.ts, 
    which works on Windows but breaks on Linux.

    //  wrong import casing
    import { User } from "./user.js"; // File is actually User.ts

*/

/* skipLibCheck

    Skips type checking on third-party libraries to speed up compilation.

    import _ from "lodash";
    // If lodash has some typing issues, skipLibCheck avoids breaking your build

*/

/* Experiment: What happens if we turn options off?
    // Turn off strict
    let maybeString; // allowed without strict => any type

    maybeString = 123; 
    console.log(maybeString.length); // runtime error! 
*/

// Extra: Type-safe function example with strict mode
function greetUser(name: string | null) {
    if (!name) {
        return "Hello, Guest!";
    }
    return `Hello, ${name.toUpperCase()}`;
}

console.log(greetUser(null));
console.log(greetUser("Seiju"));