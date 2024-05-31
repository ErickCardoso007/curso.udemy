const obj = {
    animais: ['cachorro', 'gato', 'passarinho'],
    get primeiroAnimal(){
        return this.animais[0]
    },
    set primeiroAnimal(item){
        this.animais.unshift(item)
    }

}

console.log(obj.primeiroAnimal);
obj.primeiroAnimal = 'Macaco'

console.log(obj.animais);