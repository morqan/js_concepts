let a = 12
let b = a

b++
console.log('a', a)
console.log('b', b)

let c = [1,2,3]
let d = c
let e = c.concat()
d.push(4)
let f = [1,2,3,4]
console.log('c', c)
console.log('d', d)

console.log( c === d)
console.log( c === e)
console.log( c === f)
