// use class  para criar uma pessoa e faca ela se apresentar utilizando uma fuction.

class Pessoa {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.presentation = function(){
        console.log(`Hello! my name is ${this.name}, and I have ${this.age} years.` ); 
    }   
    }
    
}

const pessoa1 = new Pessoa('Erick', 19)
pessoa1.presentation()
