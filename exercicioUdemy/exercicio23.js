// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function calcularMediaPonderada() {
    while (true) {
        let codigo = prompt("Digite o código do aluno (um número negativo para sair):");
        codigo = Number(codigo);
        

        if (codigo < 0) {
            break;
        }

        let nota1 = Number(prompt("Digite a primeira nota:"));
        let nota2 = Number(prompt("Digite a segunda nota:"));
        let nota3 = Number(prompt("Digite a terceira nota:"));


        let maiorNota = Math.max(nota1, nota2, nota3);


        let mediaPonderada;
        if (maiorNota === nota1) {
            mediaPonderada = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10;
        } else if (maiorNota === nota2) {
            mediaPonderada = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10;
        } else {
            mediaPonderada = ((nota3 * 4) + (nota1 * 3) + (nota2 * 3)) / 10;
        }

        console.log("Código do aluno:", codigo);
        console.log("Nota 1:", nota1);
        console.log("Nota 2:", nota2);
        console.log("Nota 3:", nota3);
        console.log("Média Ponderada:", mediaPonderada.toFixed(2));


        if (mediaPonderada >= 5) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

calcularMediaPonderada();