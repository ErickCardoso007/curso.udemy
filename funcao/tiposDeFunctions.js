// class constuctor
class pessoa{
    constructor(nome, idade){
        this.nome = nome, 
        this.idade = idade
    }
}

let pessoa1 = new pessoa('Erick', 19)
let pessoa2 = new pessoa('Fernando', 29)
let pessoa3 = new pessoa('Gabi', 39)

// factory
function carro(marca, lancamento){
    return{
        marca: marca, 
        lancamento: lancamento
    }
}

let carro1 = carro('hyundai', 2003)

// function constructor

function cachorro (nome, idade){
    this.nome = nome
    this.idade = idade
}
new cachorro('Rex', 2)
