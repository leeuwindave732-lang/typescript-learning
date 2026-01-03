type Config = {
    retry?: number
    timeout?: number
    verbose?: boolean
}

type ConfigValidator
< T extends 
    { 
        timeout?: number,
        retry?: number
    }
> = T extends { timeout: number } // if timeout exists
    ? T & { retry: number} // retry must exist
    : T // else leave T as is

const config1: ConfigValidator<{timeout: 30, retry: 1}> = {
    timeout: 30,
    retry: 1
}

/* Compile-time error (retry missing)
const config2: ConfigValidator<{timeout: 30}> = {
    timeout: 30
}
*/

// valid
const config3: ConfigValidator<{ retry: 5 }> = {
    retry: 5
};


// valid
const config4: ConfigValidator<{}> = {};

// Optional: Extend to other props
// We can make it generic for any extra properties:

    type ConfigValidator1<T extends Record<string, unknown>> = 
    T extends { timeout: number }
        ? T & { retry: number }
        : T;

// this allows

const config5: ConfigValidator1<{timeout: 3, verbose: false, retry: 2}> = {
    timeout: 3,
    verbose: false,
    retry: 2
}

console.log(config1)
console.log(config3)
console.log(config4)
console.log(config5)