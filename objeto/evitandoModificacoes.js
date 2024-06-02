// pode ser alterado, excluido, mas nn adicionado
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1, tag: 'promocao'
})
// console.log('Extensivel: ', Object.isExtensible(produto));

produto.nome = 'Batata'
produto.descricao = 'Batata doce'
delete produto.tag


// seal: pode ser alterado, mas nn pode ser exluido e nem adicionado.

const pessoa = {
    nome: 'Ju', 
    idade: 20
}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa));
pessoa.nome = 'Larissa'
delete pessoa.idade
pessoa.adicionaTamanho = 12
console.log(pessoa);