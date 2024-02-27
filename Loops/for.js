function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (10))
}

let tentativa;
let meuNumero = 7
let tentativas = 1

for (tentativa = gerarNumeroAleatorio(); tentativa != meuNumero; tentativa = gerarNumeroAleatorio()) {
    tentativas++
    console.log('Voce errou! O numero sorteado foi: ' + tentativa);
}

console.log('Voce ganhou! Seu numero sorteado foi: ' + meuNumero);


let textoTentativa = 'Voce precisou de ' + tentativas + ' tentativa pra ganhar.'
let textoTentativas = 'Voce precisou de ' + tentativas + ' tentativas pra ganhar.'

let opcoes = tentativas >= 2 ? console.log(textoTentativas) :  console.log(textoTentativa)

//teste