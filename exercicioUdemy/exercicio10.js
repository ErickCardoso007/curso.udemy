// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false

function verifica(numero){
    let divisao = numero / 3
    let verificaNumeroInteiro = Number.isInteger(divisao)
    return verificaNumeroInteiro
}
console.log(verifica(15));
