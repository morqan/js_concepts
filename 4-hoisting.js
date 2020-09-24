
console.log(a) //undefined
var a = 12
console.log(a)

// console.log(b) give error initialization
let b = 13
console.log(b)

// console.log(c) give reference error
const c = 14
console.log(c)

// Function declaration

console.log('before', square(15))
function square(num) {
    return  num ** 2
}
console.log('after',square(25))

// Function expression

// console.log('before', sum(15,16)) ReferenceError: Cannot access 'sum' before initialization
let sum = function (a,b) {  // var, let, const
    return a + b
}
console.log('after', sum(15,16))
