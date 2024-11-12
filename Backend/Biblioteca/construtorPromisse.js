function promessa(bool){
    const x = bool
    return new Promisse((resolve, reject) =>{
        if(!x){
            reject(new Error("falha na promessa"))
        }
        resolve("sucesso na promessa")
    })
}

function exibeResposta(textoResultado){
    console.log(textoResultado)
}

promessa(true)
    .then((texto)=>exibeResposta(texto))

