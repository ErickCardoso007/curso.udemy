const pai = {
    nome: 'Daniel',
    corCabelo: 'preto'
}
const filha1 = Object.create(pai)
filha1.nome  = 'Ana'

const filha2 = Object.create(pai, {
    nome: { value: 'Clara',
            writable: false,
            enumerable: true}
})
console.log(Object.keys(filha1));
console.log(Object.values(filha2));

for(let key in filha2){
   filha2.hasOwnProperty(key) ? 
   console.log(key) : console.log('Por heranca: ' + key);
}