export type Product = {
    name: string,
    price: number,
}

export function getProductInfo(product: Product): string {
    return `The product name and price: ${product.name} - ${product.price}`
}

