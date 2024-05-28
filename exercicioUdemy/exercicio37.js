// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

function progressaoAritmetica(n, a1, r) {
    let termos = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        let termo = a1 + i * r;
        termos.push(termo);
        soma += termo;
    }

    console.log("Progressão Aritmética (PA):", termos);
    console.log("Soma dos termos da PA:", soma);
}

progressaoAritmetica(5, 1, 2);

function progressaoGeometrica(n, a1, r) {
    let termos = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        let termo = a1 * Math.pow(r, i);
        termos.push(termo);
        soma += termo;
    }

    console.log("Progressão Geométrica (PG):", termos);
    console.log("Soma dos termos da PG:", soma);
}


progressaoGeometrica(5, 1, 2);