// Template literal types allow you to build types using template literal syntax.
// Basic Template Literal Types
// Constrain strings to specific patterns using template literals and unions.

type Greeting = `Hello, ${string}`

const ValidGreeting: Greeting = `Hello, World`
// const InvalidGreeting: Greeting = (`Hi, world`) // error

// with Unions

type color = "red" | "green" | "blue"
type size = "small" | "medium" | "large"

type style = `${color}-${size}`

// 'red-small' | 'red-medium' | 'red-large' |
// 'green-small' | 'green-medium' | 'green-large' |
// 'blue-small' | 'blue-medium' | 'blue-large'

const Styling: style = "red-small"

console.log(ValidGreeting)
console.log(Styling)
