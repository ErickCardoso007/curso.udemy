const pessoa = Object.create(null)
pessoa.nome = 'Maria'
pessoa.idade = 19
console.log(pessoa);

Object.freeze(pessoa)
// Nao e possivel fazer nenhum tipo de alteracao no objeto, ele ficou de fato constante.
delete pessoa.idade
delete pessoa.nome
