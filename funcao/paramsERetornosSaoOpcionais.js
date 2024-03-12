function area (altura, largura) {
    let area = altura * largura
    if(area > 20){
        return 'Limite de area ultrapassado.'
    }else{
        return area
    }
}

console.log(area(5, 3, 2, 2, 2, 2 , 2));
console.log(area(5));
console.log(area());

// Nesta aula vemos as possibilidades de retorno e contencao que uma function tem.