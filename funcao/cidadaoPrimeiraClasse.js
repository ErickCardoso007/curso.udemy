// Function de forma literal
function comprimentar() {
    return 'oi'
}
console.log(comprimentar());

// armazenar em uma variavel
const somaDeValores = function (a, b ) {
    let soma = a + b
    return soma
}
console.log(somaDeValores(2, 3));

// armazenar em um array
const array = [function (a, b) { return a - b}]
console.log(array[0](2, 4));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar());

// Passar funcao como parametro
function run(fun){
    
     fun()
}
run(function () { console.log('Carregando...');})




