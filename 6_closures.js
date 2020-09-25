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
