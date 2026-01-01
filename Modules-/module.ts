// module is any file that uses export or import.
// this will make the code reusable
import { add, subtract, multiply, divide} from "./math.js"; // from math.ts

console.log(add(2, 3))
console.log(subtract(10,5))
console.log(multiply(10,10))
console.log(divide(100, 10))

// npm install -D tsx