// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
const array = [12, 23, 14, 3, 10, 15, 20, 11, 25]
// let carro = array.filter(element => element >= 25)
// let novo;
Array.min = function(array){
    return Math.min.apply(Math, array)
}
Array.max = function(array){
    return Math.max.apply(Math, array)
}
console.log(Array.max(array));
console.log(Array.min(array));