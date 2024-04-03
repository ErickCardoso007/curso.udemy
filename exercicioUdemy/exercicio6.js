// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
// A primeira função retornará o montante da aplicação financeira sob o regime de juros simples 
//  e a segunda retornará o valor da aplicação sob o regime de juros compostos.


function ImprimeJurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    let calcJuros = capitalInicial * taxaDeJuros *  tempoDeAplicacao
    let montante = capitalInicial  + calcJuros
    return `O montante da aplicação financeira sob o regime de juros simples é R$${montante.toFixed(2).replace('.', ',')}.`
}
function ImprimeJurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    let montante = capitalInicial * Math.pow(1 + taxaDeJuros, tempoDeAplicacao);
    return `O montante da aplicação financeira sob o regime de juros compostos é R$${montante.toFixed(2).replace('.', ',')}.`
}

console.log(ImprimeJurosSimples(1400, 0.12, 2));
console.log(ImprimeJurosComposto(1400, 0.07, 8));
