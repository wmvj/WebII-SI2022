// Q01
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

delay(5000).then(() => console.log("5 segundos se passaram"))


// Q05
async function fetchDataFromAPI(url){
    let response = await fetch(url);
    if(response.status !== 200){
        throw new Error("Falha na comunicação com a API")
    }
    return await response.json();
}


fetchDataFromAPI("https://jsonplaceholder.typicode.com/users/1")
    .then((data)=>console.log(data))
    .catch((erro)=>console.log(erro.message))