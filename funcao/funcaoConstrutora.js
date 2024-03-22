function Carro(velocidadeMax = 200, delta = 5) {
    let velocidadeAtual = 0

    this.acelerar = function () {
        if(velocidadeAtual + delta >= velocidadeMax){
            velocidadeAtual = velocidadeMax
        }else {
            velocidadeAtual += delta
        }
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

}

let uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual());





