class compraVerdura{
    constructor(maca, banana, melancia, laranja){
        this.maca = maca,
        this.banana = banana,
        this.melancia = melancia,
        this.laranja = laranja
    }
    calculaCompras(){
        return this.maca + this.banana + this.melancia + this.laranja
    }
}

const compra = new compraVerdura(2, 4, 5, 6)
console.log(compra.calculaCompras());
console.log(compra);

const saldo = 900
function calcula(){
    return saldo - compra.calculaCompras()
}
console.log(calcula());
