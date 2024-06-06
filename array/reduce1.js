const alunos = [
    {nome: 'Carlos', nota: 7.3, bolsista: true},
    {nome: 'Ana', nota: 9.2, bolsista: false},
    {nome: 'Devid', nota: 9.8, bolsista: true},
    {nome: 'Paula', nota: 9.2, bolsista: false}
]

const resultado = alunos.map(e => e.nota).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
console.log(resultado);