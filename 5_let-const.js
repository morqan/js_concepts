let a = 'var A'
let b = 'var B'
{
    a = 'var a'
    let b = 'new b'
    console.log(a, 'scope')
    console.log(b, 'scope')
}
console.log(a)
console.log(b)


// const

const c = 88
// c = 87  => TypeError: Assignment to constant variable.

const arr = ['js', 'best', 'lang']
arr[0] = "JS"
arr.push('!')
console.log(arr)

const obj = {}
obj.name = "CAT"
obj.age = 7
obj.color = 'white'
console.log(obj)
delete obj.name
console.log(obj)
