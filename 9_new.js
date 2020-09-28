function Cat(color, name) {
    this.color = color
    this.name = name
}
const cat = new Cat('white', 'snow')
console.log(cat)

function myNew(constructor, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const catMyNew = myNew(Cat,'black','snow')
console.log(catMyNew)
