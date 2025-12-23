// we can do arrays with 

// const scores: number[] = [98,95,88];

/* the index starts at 0 so 
indes 0 = 98, 
index 1 = 95, 
index 2 = 88 
*/

// or this 

// const score = [90, 95, 88]; // number[]

// array methods

const scores: number[] = [98,95,88] 

scores.push(85); // appends new number 
scores.pop(); // removes the last element

const doubled = scores.map(score => score * 2); 
/* "map" calls a defined callback function on each element of an array, and returns an array that contains result
the result is the times 2 of each number in arrays since its *2 */

const passed = scores.filter(score => score >= 75);
/* "filter" returns the elements of an array that meet the condition specified on callback function
in this example the passing grade is 75 so anything that is below than that will not be printed */


const total = scores.reduce((sum, score) => sum + score, 0);
/* "reduce" calls the specified callback function for all the element in array. the return value of the 
callback function is the accumulated result, and is provided as an argument in the next call to the 
callback function, in this case it will just add the arrays
*/

console.log(doubled)
console.log(passed)
console.log(total)


