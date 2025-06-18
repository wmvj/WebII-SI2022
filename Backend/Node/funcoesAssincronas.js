function asyncFunction() {
    return new Promise((resolve, reject) => {
        // simula operação assíncrona
        setTimeout( () => {
        const isSuccess = true;

        if (isSuccess) {
            resolve('Operação bem-sucedida');
        } else {
            reject('Erro na operação');
        }
       }, 3000) // Simula uma operação assíncrona que leva 3 segundos
    });
}

console.log(asyncFunction())

// Exemplo de uso da função assíncrona com then e catch
console.log("Executando a chamada da função assíncrona");
asyncFunction()
    .then(result => {
        console.log("Sucesso:", result);
    }).catch(error => {
        console.error("Error:", error);
    }).finally(() => {
        console.log("Operação finalizada");
    });

// Exemplo de uso da função assíncrona com async/await
async function fetch() {
    try {
        const response = await asyncFunction();
        console.log("Sucesso", response);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Operação finalizada");
    }
}

fetch();