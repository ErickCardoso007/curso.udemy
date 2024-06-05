const produtos = [
    {nome: 'Notbook', preco: 2499, fragil: true},
    {nome: 'celular', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

const compra = produtos.filter((e) => e.preco >= 2000 && e.fragil == true)
console.log(compra);