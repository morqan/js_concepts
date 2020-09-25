// Immediate Invoked Function Expression

let result = []

for (var i = 0; i < 7; i++ ) {  // use let give error
    result.push(function () {
        console.log(i)
    })
}
result[2]()

let result2 = []

for (let a = 0; a < 8; a++){
    (function () {
        let b = a
        result2.push(function () {
            console.log(b)
        })
    })()
}
result2[5]()
