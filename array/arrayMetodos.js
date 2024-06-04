const grupoPessoas = ['Paulo', 'Ana', 'jeff']

grupoPessoas.pop() // Remove o ultimo elemento do array
console.log(grupoPessoas);

grupoPessoas.push('Carlos')
console.log(grupoPessoas); // Adiciona um elemento ao ultimo indice de um array

grupoPessoas.shift() // Remove o primeiro elemento do array
console.log(grupoPessoas);

grupoPessoas.unshift('Erick') // Adiciona elemento ao inicio do array
console.log(grupoPessoas);

grupoPessoas.splice(0, 0, 'Brian', 'Gederson') // Adiciona elemento apartir do indice indicado
console.log(grupoPessoas);

grupoPessoas.splice(1, 1) // Remove elemento apartir do indice indicado


const newArray = grupoPessoas.slice(2, 4) // copia pedacos de um array ja existente e cria seu proprio array apartir dos elementos copiados.
console.log(newArray);
