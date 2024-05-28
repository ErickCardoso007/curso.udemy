// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

const explicaNota = (nota) => {
    for(let i = 0; nota.length > i; i++){
        if(nota[i] <= 4.9 && nota[i] >= 0.0){
            console.log(nota[i] +': D');
        }else if(nota[i] <= 6.9 && nota[i] >= 5){
            console.log(nota[i] + ': C');
        }else if(nota[i] <= 8.9 && nota[i] >= 7.0){
            console.log(nota[i] + ': B');
        }else if(nota[i] <= 10 && nota[i] >= 9){
            console.log(nota[i] + ': A');
        }
    }
    
}


explicaNota([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])