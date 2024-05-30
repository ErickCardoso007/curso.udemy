class Dog{
    constructor(nome, raca, latido){
        this.nome = nome;
        this.raca = raca;
        this.latido = latido;
    }
    latir(){
        console.log(this.latido);
    }
}

const dog1 = new Dog('Luna', 'shitzu', 'Au Au Au!!')
console.log(dog1.nome, dog1.raca);
dog1.latir()