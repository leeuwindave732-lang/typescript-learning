// here are the common mistakes 

// function add(a, b) { }   // XXX no types
// function greet(name?: string)  // XXX optional first param
// function log(): number { } // XXX missing return

// heres how to do it 

function Student (
    name: string,
    year: number,
    age: number
): void {
    console.log(`name: ${name}`);
    console.log(`year: ${year} year`);
    console.log(`age: ${age}`);
} // use void when nothing is returned

// call the function

Student(
    "Seiju",
    1,
    18
)
