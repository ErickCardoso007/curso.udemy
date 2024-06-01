class Dev{
    constructor(nome, funcao, tempoArea){
        this.nome = nome;
        this.funcao = funcao;
        this.tempoArea = tempoArea
    }
    apresenta(){
        console.log(`Opa! Me chamo ${this.nome}, trabalho com ${this.funcao} a ${this.tempoArea} anos.`);
    }
}



class FrontendDev extends Dev{
    constructor(nome, funcao, tempoArea, framework){
        super()
        this.nome = nome;
        this.funcao = funcao;
        this.tempoArea = tempoArea
        this.framework = framework
    }
    
}

const devFront = new FrontendDev('Erick', 'desenvolvimento web', 3, 'react')
devFront.apresenta()
console.log(devFront);
