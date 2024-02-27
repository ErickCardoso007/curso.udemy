const mediaNota = (a, b, c) => {
    let media = Math.floor((a + b + c) / 3)
    return media
}
let suaMedia = mediaNota(1, 10, 9)

switch (suaMedia) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
        console.log('Aprovado');
        break;
    case 5:
    case 4:
    case 3:
        console.log('Recuperacao');
        break;
    case 2:
    case 1:
    case 0:
        console.log('Reprovado');
        break;
    default:
        console.log('Nao foi possivel ler sua nota.');
        break;
}
console.log('sua nota: ' + suaMedia);