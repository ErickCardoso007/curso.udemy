const pessoas = ['Ana', 'Maria', 'Ketlin', 'Erick']

let imprimir = function(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

pessoas.forEach(imprimir)
pessoas.forEach((nome) => console.log(nome))