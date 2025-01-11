// Interface x Type

interface IbaseProducts {
    price: number,
}

// Exemplo de usar extends
interface IProduct extends IbaseProducts {
    id: number,
    name: string   
}

interface IProduct {
    quantity: number,

}

type TBaseProducts = {
    price: number,
}

// Exemplo de usar união de tipos
type TProduct = TBaseProducts & {
    id: number,
    name: string

}

// Uso em si não muda.
let iproduct : IProduct = {id: 1, name: "Produto", price: 1000, quantity: 2}




let tproduct : TProduct = {id: 2, name: "Produto2", price: 1000}


type TypeString = string

// Diferença Interface x Type
// Interface pode ser sobrescrito, type não pode.
/* Quando utilizar uma ou outra, no mercado é mais comum 
utilizar interfaces, depende mais do momento.

*/