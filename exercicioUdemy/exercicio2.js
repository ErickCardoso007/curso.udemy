// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function classificaTriangulo (a = 1, b = 1, c = 1){
    
    if(a === b && a === c && c === b){
        return 'Equilátero'
    }else if(a !== b && a !== c && c !== b){
        return 'Escaleno'
    }else{
        return 'Isósceles'
    }
}
console.log(classificaTriangulo(3, 2, 1));

