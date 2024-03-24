function pessoa(nome, idade){
    return `${nome} tem ${idade} anos de idade`
}

const pessoa1 = { nome: 'Kevin', idade: 10}


console.log(pessoa.call(pessoa1, 'Erick', 19));
console.log(pessoa.apply(pessoa1, ['Ana', 20]));