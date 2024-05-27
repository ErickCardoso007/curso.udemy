// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
let array = [12, 3, 2, 13, 14, 3, 6,3, 4, 25, 123, 411]
let par = 0
let impar = 0
let pegaPar = []
let pegaImpar = []

array.forEach(function identificaPares(item){
    let calculo = item / 2
    let verificaNum = Number.isInteger(calculo)
    if(verificaNum){
        pegaPar.push(item)
        par++
    }else{
        impar++ 
        pegaImpar.push(item)
    }

    }, 
)
console.log(`Neste array existe ${pegaPar.length} pares e ${pegaImpar.length} impares.` )
        







