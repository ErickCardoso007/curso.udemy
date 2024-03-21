function exibirNum(num){
    console.log(`A operacao e: ${num}`);
}

function soma(a, b, callback = exibirNum) {
    let soma = a + b
    callback(soma)
}

soma(3, 2)