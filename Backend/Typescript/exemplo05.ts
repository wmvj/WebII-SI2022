
// Tipos personalizados no TS
interface Product {
    id: number,
    name: string
}

function newProduct(product: Product){
}

newProduct({ id: 1, name: "Product 1" })


// Como estender interfaces
interface Person {
    id: number,
    name: string
}

interface Teacher extends Person {
    // id: number,
    // name: string,
    subjects: string[]
}

interface Student extends Person {
    // id: number,
    // name: string,
    age: number
}

let teacher: Teacher = { id: 1, name: "Rodrigo", subjects: ["JavaScript", "TypeScript"]}

let student: Student = { id: 2, name: "João", age: 23}

