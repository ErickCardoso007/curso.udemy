function Pessoa(nome){
    this.nome = nome
    this.falar =  function(){
        console.log(`Ola, ${nome}`); 
    }
}

let menino = new Pessoa('Erick')
menino.falar()