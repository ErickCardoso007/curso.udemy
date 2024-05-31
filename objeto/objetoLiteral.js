const a = 1
const b = 2
const c = 3

const obj = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj, obj2);
// ------------------------

const obj3 = {
    apresentacao1: function() {
        return 'forma antiga de chamar uma funcao dentro de um objeto'
    },
    apresentacao2(){
        return 'forma nova de chamar uma funcao dentro de um objeto'
    }
}

console.log(obj3.apresentacao1(), obj3, obj3.apresentacao2());