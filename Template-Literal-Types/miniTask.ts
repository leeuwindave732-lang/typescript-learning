// define allowed values
type Color = 'red' | 'green' | 'blue' | 'black';
type Size = 'small' | 'medium' | 'large';

type ProductTag = `${Color} - ${Size}`

// add status to the product tag
type Status = "Stock" | "Out Of Stock" | "Arriving"
type Product = ProductTag

type ProductStatus = `${Status} - ${Product}`

const ProductStatus1: ProductStatus = "Stock - red - small"
const ProductStatus2: ProductStatus = "Out Of Stock - red - medium"
const ProductStatus3: ProductStatus = "Stock - red - large"
const ProductStatus4: ProductStatus = "Stock - green - small"
const ProductStatus5: ProductStatus = "Out Of Stock - green - medium"
const ProductStatus6: ProductStatus = "Stock - green - large"
const ProductStatus7: ProductStatus = "Stock - blue - small"
const ProductStatus8: ProductStatus = "Stock - black - large"
const ProductStatus9: ProductStatus = "Arriving - black - small"

console.log(ProductStatus1) // output: Stock - red - small
console.log(ProductStatus2) // output: Out Of Stock - red - medium
console.log(ProductStatus3) // output: Stock - red - large
console.log(ProductStatus4) // output: Stock - green - small
console.log(ProductStatus5) // output: Out Of Stock - green - medium
console.log(ProductStatus6) // output: Stock - green - small
console.log(ProductStatus7) // output: Stock - blue - small
console.log(ProductStatus8) // output: Stock - black - large
console.log(ProductStatus9) // output: Arriving - black - small