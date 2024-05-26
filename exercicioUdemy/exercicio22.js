// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido


const calculaJuros = (mes, valor) => {
    const valorSemJuros = valor
    let i = 1
    let calcPorcentagem = valor * 5 / 100

        while(i <= mes){
            valor+=calcPorcentagem
            i++
            if(mes == 1){
                return valorSemJuros
            }else if(i == mes){
                return valor
            }
        }

    }  
console.log(calc(3, 1200));
