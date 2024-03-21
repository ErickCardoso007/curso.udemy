const notas = [7.2, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]



let mostraNotasBaixas = notas.filter(function(nota){
    return nota < 7
})
const notasBaixas = []
notasBaixas.push(mostraNotasBaixas)
console.log(notasBaixas);
