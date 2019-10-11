// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj)) // uma matriz de obj

//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, // declarações mais faceis não precisa mais de nome : nome
    ola() { // funções mais faceis não necessita mais de ola: function {}
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class 
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())