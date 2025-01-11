type Product = {
    id: number,
    name: string,

}

function newProduct(product:Product) {

}

newProduct({id: 123, name: "Gustavo"})

type SelectResult = Product[] | null

function selectProducts(): SelectResult {
    return null
}