const animal = {
    idade: 0,
    som: '',
    fazerSom(){
        return this.som
    }
}

const cachorro = {
    nome: 'Aspas',
    idade: 10,
    som: 'AU Au Au'
}
const gato = {
    nome: 'felix',
    idade: 11,
    som: 'miau'
}
Object.setPrototypeOf(cachorro, animal)
Object.setPrototypeOf(gato, animal)
console.log(`O gato chamado ${gato.nome} fez este som: ${gato.fazerSom()}`);
console.log(`O cachorro chamado ${cachorro.nome} fez este som: ${cachorro.fazerSom()}`);
