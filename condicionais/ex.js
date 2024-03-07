const numRandom = () => {
    let random = Math.floor(Math.random() * 2)
    return random
   
}

let jogador1 = 'erick'
let numJogador1 = 1
let jogador2 = 'ketlin'
let numJogador2 = 0

let random = numRandom()


if(random == numJogador1 && random == numJogador2){
    console.log("Empate")
}else if(numJogador1 == random){
    console.log("Seu número foi sorteado " + jogador1 + "!")
}else if(numJogador2 == random){
    console.log("Seu número foi sorteado " + jogador2 + "!")
}else if(random != numJogador1 && random != numJogador2){
    console.log("Ambos perderam a aposta")
}else{
    console.log("Error")
}
