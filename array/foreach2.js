Array.prototype.forEach2 = function(callback){
    for(let i = 0; this.length > i; i++){
        callback(this[i], i)
    }
}

const aprovados = ['Paulo', 'Ana', 'jeff']

aprovados.forEach2((e, i) => {
    console.log(`${i + 1}) ${e}`);
})
