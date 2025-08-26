// undefined
let value: number
value = 12
console.log(value)

let user = {
    name: "Rodrigo"
}

// console.log(user.email)

// null (ausência intencional de valor)
let email = null
console.log(email)

if (!email){
    console.log("Informe o e-mail!")
}

// União de tipos
let response: string | null

response = "Teste"
response = null