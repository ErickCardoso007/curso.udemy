// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras

const comparaString = (frase, frase2) => {
    frase = frase.toUpperCase()
    frase2 = frase2.toUpperCase()
    if(frase === frase2){
        return true
    }else{
        return false
    }
    
}
console.log(comparaString('Erick Cardoso', 'erick cardoso'))