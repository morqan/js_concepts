const person = {
    surname: 'Stark',
    knows: function (what, name) {
        console.log(`You know ${what}, ${name} ${this.surname} `)
    }
}

person.knows('everything', 'Bran')

const snow= {surname: 'Snow'}
person.knows.call(snow,'nothing','Jone')
person.knows.call(snow,...['nothing','Jone'])
person.knows.apply(snow,['nothing','Jone'])
person.knows.bind(snow,'nothing','Jone')()

const bind = person.knows.bind(snow,'nothing','Jone') //bind create new function
bind()
// =====

function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this)
}
const elena = new Person('Elena', 25)

//======
function logThis() {
    console.log(this)
}
const obj = { num: 16 }
logThis.call(obj)
logThis.apply(obj)
logThis.bind(obj)()

//=====
const animal = {
    legs: 4,
    logThis: function () {
        console.log(this)
    }
}
animal.logThis()

function Cat(color) {
    this.color = color
    console.log('this',this)
    ;( () => console.log('arrow this',this) )()
}

new Cat('white')


const dog = {
    name: 'Max',
    age:5,
    logInfo: function (color) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Color is ${color}`)
    }
}

dog.logInfo('white')

const jane = {
    name: 'Jane',
    age: 4
}

dog.logInfo.bind(jane,'brown')()
dog.logInfo.call(jane,'green')
dog.logInfo.apply(jane,['black'])

const arr = [1,2,3,5,8,13]
function multBy(arr,n) {
    return arr.map(function (i) {
        return i * n
    })
}
console.log(multBy(arr,2))
