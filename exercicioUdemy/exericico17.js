// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// plano | aumento
// A     |     10%
// B     |     15%
// C     |     20%




function implementaAumentoDeSalario(plano, aumento,  salarioAtual){
     
    function processaAumento(plano, aumento, salarioAtual){
        const definePorcentagem = (aumento * salarioAtual) / 100
        const calculaAumento = salarioAtual + definePorcentagem
        return calculaAumento
    }
    const textoFixo = `Apos aumento de ${aumento}%, o seu salario ficou em R$${processaAumento(plano, aumento, salarioAtual)}`
    switch(plano){
        case 'A':
            console.log(textoFixo);
            break
        case 'B':
            console.log(textoFixo);
            break
        case 'C':
            console.log(textoFixo);
            break
            default:
                console.log('Erro: Plano invalido.');
    }
}

implementaAumentoDeSalario("A", 10, 1200)
implementaAumentoDeSalario("B", 15, 1200)
implementaAumentoDeSalario("C", 20,1200)
implementaAumentoDeSalario(666, 1200)