// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const determinaAlteracaoDeAltura = (altura, taxaCrescimento, altura2, taxaCrescimento2) =>{
    function calculaCrescimentoAnual(altura, crescimento){
        let calculoCm = (altura * crescimento) / 100
        return calculoCm
    }
    let ano = 0
    let crianca1 = calculaCrescimentoAnual(altura, taxaCrescimento)
    let crianca2 = calculaCrescimentoAnual(altura2, taxaCrescimento2)
    
    if(altura < altura2){
        while(altura < altura2){
            ano++
            altura += crianca1
        }
        console.log(`Foi necessarios ${ano} anos para a primeira crianca ultrapassar a segunda.`);
    }else if(altura > altura2){
        while(altura > altura2){
            ano++
            altura2 += crianca2
        }
        console.log(`Foi necessarios ${ano} anos para a segunda crianca ultrapassar a primeira.`);
    }else{
        console.log('Ambas criancas tem a mesma altura');
    }
}

determinaAlteracaoDeAltura(120, 5, 190, 7)
determinaAlteracaoDeAltura(190, 5, 120, 7)
determinaAlteracaoDeAltura(120, 5, 120, 7)