function calcularFatorial(num) {
    if (num < 0) {
        return "Fatorial não é definido para números negativos.";
    }
    let fatorial = 1;
    let i = num;

    console.log(`Calculando o fatorial de ${num}:`);
    while (i > 0) {
        console.log(`i = ${i}, fatorial = ${fatorial} * ${i} = ${fatorial * i}`);
        fatorial *= i;
        i--;
    }

    return fatorial;
}

let numero = 5;
console.log(`O fatorial de ${numero} é ${calcularFatorial(numero)}`);