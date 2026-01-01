import {  getProductInfo  } from "./product.js" // value import
import type { Product } from "./product.js" // type import

const item: Product = 
    {
        name: "Apple",
        price: 10,
    }

const item1: Product = 
    {
        name: "Orange",
        price: 10,
    }

console.log(getProductInfo(item)) // output: The product name and price: Apple - 10
console.log(getProductInfo(item1)) // output: The product name and price: Orange - 10

/*  Key Takeaways

Keep types and values separate in imports when needed
Modules are file-based; one file exports, another imports
Template for real-world usage:
    types.ts → all type definitions
    utils.ts → functions
    main.ts → code that uses them 
*/ 