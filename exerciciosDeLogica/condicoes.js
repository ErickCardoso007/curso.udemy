// Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

const barraMenorDeIdade = (idade) => {
    if(idade <= 17){
        return 'Voce nao pode entrar, nn tem idade suficiente.'
    }else{
        return 'Pode entrar, vc e de maior'
    }
}
console.log(barraMenorDeIdade(17));