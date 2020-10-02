function createCalcFunc(n) {
    return function () {
        console.log(n * 13)
    }
}

const calc = createCalcFunc(23)
calc()

function createIncFun(num) {
    return function (n) {
        return num + n
    }
}

const addOne = createIncFun(1)
const addTen = createIncFun(10)
console.log(addOne(112))
console.log(addTen(23))


function urlGenerator(domain) {
    return function (url) {
        return`https://${url}.${domain}`
    }
}

const comDomain = urlGenerator('com')
const ruDomain = urlGenerator('ru')
const google = comDomain('google')
console.log(google)
console.log(ruDomain('yandex'))
//======

 function bind(obj,func) {
    return function (...arg) {
        func.apply(obj,arg)
    }
}

function logPerson() {
    console.log(`Person: name: ${this.name}, age: ${this.age}, job: ${this.job}`)
}
const person = {name:'Morgan',age: 27, job:'frontend'}

bind(person,logPerson)()

function sayHelloTo(name) {
    const message = 'Hello ' + name
    return function () {
        console.log(message)
    }
}
const helloToMorgan = sayHelloTo('Morgan')
helloToMorgan()

function createFrameworkManager() {
    const fw = ['Angular', 'React']

    return {
        print: function () {
            console.log(fw.join(' '))
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}
const manager = createFrameworkManager()
manager.print()
manager.add('Vue')
manager.print()

// setTimeout
const fib = [1,2,3,5,8,13]
for (var i = 0; i < fib.length; i++){
    setTimeout(function () {
        console.log(`fib${i} = ${fib[i]}`)
    },1000)
}
for (var i = 0; i < fib.length; i++){ //use closures or let with setTimeout
    (function (j) {
        setTimeout(function () {
            console.log(`fib${j} = ${fib[j]}`)
        },1500)
    })(i)
}
for (let i = 0; i < fib.length; i++){
    setTimeout(function () {
        console.log(`fib${i} = ${fib[i]}`)
    },2000)
}


