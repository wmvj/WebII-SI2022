// PRIMEIRA OPCAO

import {soma, subtracao} from './operacoesESM.js'

console.log(soma(2,2))
console.log(subtracao(2,2))

// SEGUNDA OPCAO
import * as operacoes from './operacoesESM.js'

console.log(operacoes.soma(2,2))
console.log(operacoes.subtracao(2,2))

// TERCEIRA OPCAO

import soma from './operacoesESM.js'

console.log(soma(2,2))

// QUARTA OPCAO

import Calculadora from './operacoesESM.js'

const calculadora = new Calculadora()

console.log(calculadora.soma(2,2))
console.log(calculadora.subtracao(2,2))