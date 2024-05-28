// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros

const array = [12, 23, 14, 3, 10, 15, 20, 11, 25]
const somaAll = array.reduce((accumulator, currentValue) => accumulator + currentValue)
const result = somaAll / array.length

console.log(result.toFixed(1));