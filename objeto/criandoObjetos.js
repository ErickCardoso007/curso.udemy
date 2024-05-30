const obj1 = {}
//console.log(obj1);

//----------------

const obj2 = new Object()
//console.log(obj2);


//----------------


class Person {
    constructor(name, years) {
        this.name = name;
        this.apresenta = () => {
            return `Hello, my name's ${name}. I have ${years} years old.`;
        };
    }
}
const person = new Person('Erick', 20)
//console.log(person.apresenta());


//----------------

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        calculasalario(){
            return (salarioBase / 30) * (30 - faltas)
        } 

    }
}

// const f1 = criarFuncionario('Erick', 2300, 3)
// const f2 = criarFuncionario('Hey', 3300, 1)
// console.log(f1.calculasalario(), f2.calculasalario());

//----------------

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);