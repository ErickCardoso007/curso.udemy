const aprovados = ['Paulo', 'Ana', 'jeff']


aprovados[3] = 'Erick'
aprovados.push('Ketlin')
console.log(aprovados);

aprovados.splice(3, 0, 'Joao', 'Geder', 'Andre')
console.log(aprovados[5]);
aprovados.splice(5, 1)
console.log(aprovados);