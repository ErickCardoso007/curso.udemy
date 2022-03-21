const peso1 = 2.0
const peso2 = Number('2.2');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 5.2399
const avaliacao2 = 3.2342

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = (peso1 + peso2) / total

console.log(media.toFixed(2))
console.log(media.toString(2))
