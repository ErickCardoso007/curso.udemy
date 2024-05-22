
function implementaAumentoDeSalario(porcentagem, salarioAtual){
    function processaAumento(porcentagem, salarioAtual){
        let definePorcentagem = (porcentagem * salarioAtual) / 100
        let calculaAumento = salarioAtual + definePorcentagem
        return calculaAumento
    }
    
    switch(porcentagem){
        case 10:
            console.log(`Apos aumento de ${porcentagem}%, o seu salario ficou em R$${processaAumento(porcentagem, salarioAtual)}`);
            break
        case 15:
            console.log(`Apos aumento de ${porcentagem}%, o seu salario ficou em R$${processaAumento(porcentagem, salarioAtual)}`);
            break
        case 20:
            console.log(`Apos aumento de ${porcentagem}%, o seu salario ficou em R$${processaAumento(porcentagem, salarioAtual)}`);
            break
            default:
                console.log('Erro: Plano invalido.');
    }
}

implementaAumentoDeSalario(10, 1200)
implementaAumentoDeSalario(15, 1200)
implementaAumentoDeSalario(20, 1200)
implementaAumentoDeSalario(666, 1200)