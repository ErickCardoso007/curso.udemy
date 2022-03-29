const nome = "Erick"

console.log(nome.charAt(3)) // c
console.log(nome.charAt(5)) // posição não existe
console.log(nome.indexOf("E")) // 0
console.log(nome.substring(1)) // rick
console.log(nome.substring(1, 4)) //ric
console.log('nome: '.concat(nome).concat('!')) // nome: Erick!
console.log(nome.replace('E', 'xxx')) // xxxrick
console.log('Eu, estou, cansado'.split(',')) // ['Eu', 'estou', 'cansado']