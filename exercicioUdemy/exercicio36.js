// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

function multiplica(array, num) {
    let arrayMultiplicado = []
    for(let i = 0; array.length > i; i++){
        arrayMultiplicado.push(array[i] * num)
    }
    return arrayMultiplicado
}


function verificaArray(array, num) {
    if(num >= 5){
        return multiplica(array, num)
    }else{
        return 'Erro: Numero mulplicador menor que 5'
    }
}
console.log(multiplica([5, 10, 15, 20, 25], 5));
console.log(verificaArray([5, 10, 15, 20, 25], 1));
