// __proto__
// Object.getPrototypeOf()

function Cat(name,color) {
    this.color = color
    this.name = name
}
Cat.prototype.voice = function () {
    console.log(`cat ${this.name} say: miyau`)
}
const catMorgan = new Cat('Morgan','white')
console.log(catMorgan)
console.log(Cat.prototype)
console.log(catMorgan.voice())
console.log(catMorgan.__proto__ === Cat.prototype)
console.log(catMorgan.constructor)
catMorgan.voice()

//======
function Person() {}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const morgan = new Person()
morgan.name = 'Morgan'
console.log(morgan)
console.log(morgan.__proto__)
console.log(morgan.skin)
console.log(morgan.legs)
// =====
const person = {
    name: 'Morgan',
    age: 27,
    lord: function () {
        console.log('Lord')
    }
}
console.log(person,'person')
person.lord()

const person1 = new Object({
    name: 'Anna',
    age: 26,
    monkey: function () {
        console.log('I am monkey')
    }
})
console.log(person1,'person1')
person1.monkey()

Object.prototype.sayHello = function () {
    console.log('hello')
}

person.sayHello()
person1.sayHello()

const lena = Object.create(person)
console.log(lena)
console.log(lena.__proto__)
lena.name = 'Elena'
lena.age = 25
lena.hairColor = 'Brown'
console.log(lena)
console.log(lena.hairColor)
console.log(lena.__proto__)

const arr = [1,2,3,5,8,13]

Array.prototype.multBy = function (n) {
    console.log(this,'arr = this ?')
    return this.map(function (i) {
        return i * n
    })
}
console.log(arr.multBy(2))
