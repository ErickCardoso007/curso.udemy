const carro = {
    velocidadeAtual: 0,
    velocidadeMax: 360,
    aceleraMais(delta){
        if(this.velocidadeAtual + delta <= this.velocidadeMax){
            this.velocidadeAtual += delta
        }else{
            this.velocidadeAtual = this.velocidadeMax
        }
    },
    status(){
        return this.velocidadeAtual
    }
}

const ferrari = {
    velocidadeMax: 400,
    modelo: "h200"
}

const volvo = {
    velocidadeAtual: 45,
    modelo: 'N77',
    status(){
        return `Atual - ${super.status()} max - ${this.velocidadeMax} `
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.aceleraMais(100)
console.log(volvo.status());

ferrari.aceleraMais(200)
console.log(ferrari.status());
