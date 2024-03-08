let motoristaUber = {
    nome: 'Guilerme Augusto',
    marca: 'Palio',
    cor: 'cinza', 
    placa: 'gasd123', 
}

const imprimirInformacoesCarro = () => {
    for(let propriedades in motoristaUber){
        console.log(propriedades  + ": " + motoristaUber[propriedades]);
    }
}

imprimirInformacoesCarro()