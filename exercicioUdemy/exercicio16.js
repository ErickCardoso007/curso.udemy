// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
function soma(a, b){
    return a + b
}
function subtracao(a, b){
    return a - b
}
function divisao(a, b){
    return a / b
}
function multiplicacao(a, b){
    return a * b
}

function calculadora(num1, op, num2){
   switch(op){
        case '+':
            console.log(`O resultado de ${num1} + ${num2} é: ${soma(num1, num2)}`)
            break
        case '-':
            console.log(`O resultado de ${num1} - ${num2} é: ${subtracao(num1, num2)}`);
            break
        case '/':
            if(num2 == 0){
                console.log(`Erro: Divisão por zero.`);
            }else{
                console.log(`O resultado de ${num1} / ${num2} é: ${divisao(num1, num2)}`);
            }
            
            break
        case '*':
            console.log(`O resultado de ${num1} * ${num2} é: ${multiplicacao(num1, num2)}`);
            break  
            default:
                console.log('Erro: Operaçao inválida.');

   }
}
calculadora(3,'+', 4)
calculadora(3,'-', 4)
calculadora(3,'/', 0)
calculadora(3,'/', 4)
calculadora(3,'*', 4)
calculadora(3, '%', 4)