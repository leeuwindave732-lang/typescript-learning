// "tuples" (fixed structured arrays)

const student: [string, boolean, number] = ["Seiju", true, 18]
console.log(student[0])
console.log(student[1])
console.log(student[2])

/*
index 0 = string 
index 1 = boolean
index 2 = number
*/

/* its wrong if its like this
["Seiju", 18, true]
since the boolean are in index 1 so the "true" should be in index 1
*/


/* common mistakes 

mixed typed unintentionally
const student = [1, "two", true]; // (number | string | boolean)[]

forgetting types when starting empty
const student = [];   // any[] 
*/