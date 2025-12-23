// readonly Arrays are important

const subjects: readonly string[] = ["CC101", "CC102", "PL"];

/* this will cause an error

subject.push("NEW");
subject[0] = "NEW";

*/

// but reading is fine, for example
console.log(subjects[0]) //prints the CC101 only
console.log(subjects.join(", ")) // adds all the elements of an array seperated by the specified seperator ring


// use "readonly" when data should not change