// async

async function greet() {
    return `Hello World`
}

const result = greet();  // result is a Promise, not a string
result.then(msg => console.log(msg)) // logs Hello World

// .then() is a method on Promises.