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
