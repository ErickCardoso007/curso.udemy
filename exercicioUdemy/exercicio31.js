// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const array = [-12, 23, -14, -3, 10, 15, -20, 11, -25]

const procuraNumero = array.filter((element) => element < 0)
console.log(`Existe ${procuraNumero.length} numeros negativos.`);