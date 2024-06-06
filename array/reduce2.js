// desafio1: Todos os alunos sao bolsistas?
// desafio2: Algum aluno e bolsista?

const alunos = [
    {nome: 'Carlos', nota: 7.3, bolsista: true},
    {nome: 'Ana', nota: 9.2, bolsista: false},
    {nome: 'Devid', nota: 9.8, bolsista: true},
    {nome: 'Paula', nota: 9.2, bolsista: false}
]

const desafio1 = alunos.map(e=> e.bolsista).reduce((acumulador, valorAtual) => {
    if(valorAtual && acumulador){
        return true
    }else{
        return false
    }
})


const desafio2 = alunos.map((e) => e.bolsista).reduce((acumulador, valorAtual) =>{
    if(valorAtual  ||  acumulador){
        return true
    }else{
        return false
    }
    
})

console.log(`Todos os alunos sao bolsistas: ${desafio1}`)
console.log(`Algum aluno e bolsista?: ${desafio2}`)