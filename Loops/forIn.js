let estudante = {
    nome: 'Erick',
    idade: 18,
    profissao: 'Desenvolvedor',
}
    
for(let atributos in estudante){
    console.log(atributos + ": "+ estudante[atributos]);
}
