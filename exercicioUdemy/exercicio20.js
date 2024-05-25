// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10, R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1

function tranfereTroco(valor){
    let vezes100 = 0
    let vezes50 = 0
    let vezes10 = 0
    let vezes5 = 0
    let vezes1 = 0
    const valorInicial = valor
    while(valor > 0){
        if(valor >= 100){
            vezes100++
            valor -= 100
        }else if(valor >= 50 && valor < 100){
            vezes50++
            valor -= 50
        }else if(valor >= 10 && valor < 50){
            vezes10++
            troco = valor -= 10
        }else if(valor >= 5 && valor < 10){
            vezes5++
            valor -= 5
        }else if(valor >= 1 && valor < 5){
            vezes1++
            valor -= 1
        }else{
            break
        } 
    }
    console.log(`Troco: ${valorInicial}`);
    console.log(`${vezes100} nota(s) de R$ 100.`);
    console.log(`${vezes50} nota(s) de R$ 50.`);
    console.log(`${vezes10} nota(s) de R$ 10.`);
    console.log(`${vezes5} nota(s) de R$ 5.`);
    console.log(`${vezes1} nota(s) de R$ 1.`);
    

}

tranfereTroco(18)