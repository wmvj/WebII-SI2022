//Usando o Type
type Product = {
    id: number,
    name: string
}

function newProduct(product: Product){
}

newProduct({ id: 1, name: "Produto x"})


type SelectResponse = Product[] | null

function selectProducts(): SelectResponse {
    return null
}