// Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function percorreDeterminadoNumero(inicio, fim){
    for(let i = 0; inicio <= fim; i++){
        inicio += 3
        if(inicio > 100){
            break
        }
        console.log(inicio);
    }

}
percorreDeterminadoNumero(0, 100)