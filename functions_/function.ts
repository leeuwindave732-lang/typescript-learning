// here are the common mistakes 

// function add(a, b) { }   // XXX no types
// function greet(name?: string)  // XXX optional first param
// function log(): number { } // XXX missing return

// heres how to do it 

const add = (
    a: number,
    b: number
): number => {
    return a + b
}

/* this is optional if you dont want to print 
add (
    10, 
    20
)
*/

console.log(add(10,20)) // use this if you want to print the function
