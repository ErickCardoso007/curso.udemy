const numeros = [1, 3, 4, 5, 6, 7]
let resultado = numeros.map(function(e){
    return e * 2
})
console.log(numeros);
console.log(resultado);

const soma10 = e => e + 10
const triplo = e => e * 3
const reais = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(reais)
console.log(resultado);