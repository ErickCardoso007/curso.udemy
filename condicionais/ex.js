let random = Math.floor(Math.random() * 2)
console.log(random);

let nome1 = 'Ketlin'
let num1 = parseFloat(prompt(nome1 + ", " + "Aposte em um número entre 0 e 1 "))

let nome2 = 'Erick'
let num2 = parseFloat(prompt(nome2 + ", " + "Aposte em um número entre 0 e 1 "))



alert("O número sorteado foi: " + random)

if(random == num1 && random == num2){
    alert("Empate")
}else if(num1 == random){
    alert("Seu número foi sorteado " + nome1 + "!")
}else if(num2 == random){
    alert("Seu número foi sorteado " + nome2 + "!")
}else if(random != num1 && random != num2){
    alert("Ambos perderam a aposta")
}else{
    alert("Error")
}