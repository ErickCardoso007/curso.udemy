Array.prototype.map1 = function(callback){
    let geracaoZ = []
    for(let i = 0; this.length > i; i++){
        if(this[i] >= 2000)
            geracaoZ.push(callback(this[i], i, this))

    }
    return geracaoZ
}

const anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
const novoAno = anos.map1((e) => e)

console.log(novoAno);
