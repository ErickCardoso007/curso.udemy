// Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

const imprimeFrase = (frase) => {
    let i = 0
    while(i <= 10){
        i++
        console.log(i, frase);
    }
}
imprimeFrase('Hello World!!')