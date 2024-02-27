const mediaNota = (a, b, c) =>{
    let media = Math.floor((a + b + c) / 3)
    return media
}

let insereNota = mediaNota(10, 7, 4)

let textoAprovado = 'Aprovado! Sua nota foi ' + insereNota;
let textoReprovado = 'Reprovado! Sua nota foi ' + insereNota;

let decisaoReferenteANota = insereNota >= 6 ?  textoAprovado : textoReprovado

console.log(decisaoReferenteANota);