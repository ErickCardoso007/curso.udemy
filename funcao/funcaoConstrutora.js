function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    
    this.apresentar = function() {
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    };
}


const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);


pessoa1.apresentar(); 
pessoa2.apresentar(); 