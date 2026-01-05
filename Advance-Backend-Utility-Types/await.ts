// async with await

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function demo(){
    console.log("Wait 10 second...")
    await sleep(10000) // 10 second
    console.log("Hello World!")
}

demo()



/*
    A Promise in JavaScript/TypeScript is an object that represents 
    a value that may not be available yet, but will be resolved in 
    the future (or might fail).It’s like a “promise” that some result
    will come later.
*/