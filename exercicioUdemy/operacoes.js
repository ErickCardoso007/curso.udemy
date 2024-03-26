// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

soma = (a, b) => a + b
divide = (a, b) => a / b
subtrai = (a, b) => a - b
multiplica = (a, b) => a * b

exibiResposta = (a, b, operacao) => console.log(operacao(a, b));

exibiResposta(1, 2, soma)
exibiResposta(1, 2, divide)
exibiResposta(1, 2, subtrai)
exibiResposta(1, 2, multiplica)