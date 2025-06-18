// PRIMEIRA OPCAO

export function soma (a,b){
    return a+b
}

export function subtracao (a,b){
    return a-b
}

// SEGUNDA OPCAO

function soma (a,b){
    return a+b
}

function subtracao (a,b){
    return a-b
}

export {soma, subtracao}

// TERCEIRA OPCAO

function soma (a,b){
    return a+b
}

function subtracao (a,b){
    return a-b
}

export default soma

// QUARTA OPCAO

export class Calculadora{
    soma (a,b){
        return a+b
    }

    subtracao (a,b){
        return a-b
    }
}