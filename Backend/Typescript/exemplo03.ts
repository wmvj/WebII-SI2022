// Tipagem explícita ou Anotação de tipo (Type Annotation)
let names: string[] = ["Rodrigo", "Mayk"]
let numbers: number[] = [1, 2, 3, 4, 5]

// Inferência de tipo.
let products = ["Product x", "Product y", "Product z"]

// Tipagem e função com e sem retorno 
function sum (x: number, y: number): number {
    const result = x + y
    console.log("Resultado = " + result)

    return result
}

const result = sum(7, 3)


// Tipagem com função anônima
const showMessage = (name: string): string => {
    const message = "Olá " + name

    return message
}

showMessage("Rodrigo Gonçalves")


// Tipagem em objetos

let user: { name: string, age: number, avatarUrl?: string } = { name: "Rodrigo", age: 17 }

/*
function signIn(email: string, password: string) {
    // Lógica de conectar usuário na aplicação
}

signIn("rodrigo@email.com", "123")
*/

function signIn({email, password}:{email: string, password: string}) {
    // Lógica de conectar usuário na aplicação
    console.log("Usuário " + email + " conectado!")
}

signIn({ email: "rodrigo@email.com", password: "123" })