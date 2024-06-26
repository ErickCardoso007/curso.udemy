// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [12, 23, 14, 3]
const vetorString = ['carro', 'aviao', 'bike', 'moto']
const vetorDouble = [12.3, 2.12, 23.1, 38.4]

const concat = vetorInteiro.concat(vetorString, vetorDouble)
const concat2 = [...vetorInteiro, ...vetorString, ...vetorDouble]
console.log(concat);
console.log(concat2);