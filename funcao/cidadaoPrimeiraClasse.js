// Function de forma literal
function fun1() { }

// armazenar em uma variavel
const fun2 = function () {}

// armazenar em um array
const array = [function (a, b) { return a + b}]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar());

// Passar funcao como parametro
function run(fun){
    
     fun()
}
run(function () { console.log('Carregando...');})




