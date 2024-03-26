function carro(nome, marca, ano, musica){
    return{
        nome, marca, ano, musica
    }
}
 
const carro1 = carro('hb20', 'hyundai', 2003, 'Mc Saci - EU TENTEII!')
const carro2 = carro('FERRARI F8-SPIDER', 'FERRARI', 2024, 'Mc Tz - qual e o seu desejo?')
carro1.som = function(){
        if(this.musica == ''){
            console.log('Radio desligado!');
        }else{
            console.log(`${this.nome} esta tocando ${this.musica} `);
        }
    }

carro1.som()
console.log(carro1);
console.log(carro2);