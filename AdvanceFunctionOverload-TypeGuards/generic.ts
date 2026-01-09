// Generic Function Overload

function wrapArray<T>(value: T): T[];
function wrapArray<T>(value: T[]): T[];
function wrapArray<T>(value: T | T[]): T[] {
    return Array.isArray(value) ? value : [value];
}

console.log(wrapArray(5));  // [5]
console.log(wrapArray([1,2]));  // [1,2]