interface IProduct {
    id: number,
    name: string,
    price: number

}

// Tipagem customizada usando interface, no caso o IProduct
function newProduct(product : IProduct) {
    console.log(product.id , product.name, product.price)
    
    

}

newProduct({id: 1 ,  name : "X", price: 135})