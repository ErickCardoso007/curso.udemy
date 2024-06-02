class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'Doutor'){
        super(sobrenome)
        this.profissao = profissao  
    }
}

class Filho extends Pai{
    constructor(){
        super('Cardoso')
 
    }
}

const filho = new Filho
console.log(filho);