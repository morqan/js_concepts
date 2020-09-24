//null, undefined, boolean, number, string, objects, symbol

console.log(typeof 0)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof Math)
console.log(typeof Symbol('JS'))
console.log(typeof null)
console.log(typeof function () {})
console.log(typeof NaN)
console.log(typeof 'JS')// '',"",``

//use types like boolean

console.log(Boolean(''))
console.log(Boolean(' '))
console.log(Boolean('JS'))
console.log(Boolean(0))
console.log(Boolean('0'))
console.log(Boolean(null))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(function () {}))

let lang = 'JS'

if (lang){
    console.log('lang = true')
}

// string and number
console.log(1 + '2')
console.log('' + 2 + 0)
console.log('' - 2 + 0)
console.log('32' * '5')
console.log('22' - '5')
console.log(null + '5')
console.log(null + 5)
console.log(undefined + 5)


// == vs ===
console.log(2 == '2')
console.log(2 === '2')
console.log(undefined == null)
console.log(undefined === null)
console.log('0' == false)
console.log('0' === false)
console.log(0 == false)
console.log(0 == 0)
console.log(0 == '0')
console.log(false == '')
console.log(false == [])
console.log(false == {})
console.log('' == 0)
console.log('' == [])
console.log('' == {})
console.log(0 == [])
console.log(0 == {})
console.log(0 == null)

