// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir 
// o resultado e o resto da divisão destes dois valores.

function ImprimeResultado(dividendo, divisor){
    let resultado = (dividendo / divisor)
    let resto = dividendo % divisor
    console.log(resultado);
    console.log(resto);
}
ImprimeResultado(25, 7)