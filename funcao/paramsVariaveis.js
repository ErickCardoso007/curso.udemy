function soma(){
    soma = 0
    for(i in arguments) {
        soma += arguments[i]

    }
    return soma
}

console.log(soma(1, 2));