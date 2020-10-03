// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail : true
// }


class Animal {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice(voice){
        console.log(`${this.name} voice: ${voice}`)
    }
}

const animal = new Animal({
    name: 'Morgan',
    age: 7,
    hasTail: true,
})

console.log(animal)
animal.voice('gaaav')


class Cat extends Animal{
    constructor(options) {
        super(options);
        this.type = options.type
        this.color = options.color
    }
    voice(voice) {
        super.voice(voice);
        console.log('I am cat')
    }
}

const cat = new Cat({
    name: 'Jane',
    age:6,
    hasTail: true,
    type: 'Cat',
    color: 'White'
})

console.log(cat)
cat.voice('myaaaauuu')


//========
//============

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.backgroundColor = options.backgroundColor
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 70,
    backgroundColor: 'red'
})

class Circle extends Box{
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector: '.circle1',
    size: 100,
    backgroundColor: 'green'
})
