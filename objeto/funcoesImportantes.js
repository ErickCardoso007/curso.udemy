const obj1 = {
    nome: 'Rebeca',
    idade: 19,
    peso: 175
}
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

Object.entries(obj1).forEach(e => {
    console.log(`${e[0]} ${e[1]}`);
})

Object.defineProperty(obj1, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '12/12/2012'
})
console.log(obj1);

// ----------------

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 12}
Object.assign(dest, o1, o2)
console.log(dest);