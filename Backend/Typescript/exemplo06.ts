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

// Usando o Intersection de tipos
type Person = {
    id: number,
    name: string
}

type Teacher = Person & {
    subjects: string[]
}

type Student = Person & {
    age: number
}

let teacher: Teacher
let student: Student