const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.20 }',
    '{"nome": "Lapis", "preco": 3.10 }',
    '{"nome": "Caneta", "preco": 4.50 }'
]



const parse = e => JSON.parse(e)
const numeros = e => e.preco
const resultado = carrinho.map(parse).map(numeros)
console.log(resultado);