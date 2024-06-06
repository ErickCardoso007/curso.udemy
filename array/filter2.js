Array.prototype.filter2 = function(callback){
    let newArray = []
    for(let i = 0; this.length > i; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: 'Notbook', preco: 2499, fragil: true},
    {nome: 'celular', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

const caro = e => e.preco >= 2000
const fragil = e => e.fragil

console.log(produtos.filter2(caro).filter2(fragil));
console.log(produtos.filter(caro).filter(fragil));