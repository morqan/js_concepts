console.log('request data...')

// setTimeout( () => {
//     console.log('preparing data... ')
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('data received',backendData)
//     }, 2000)
// },2000)


//=========

const myPromise = new Promise( (resolve, reject) =>{
    setTimeout(() => {
        console.log('promise preparing data...')
        const promiseBackendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(promiseBackendData)

    }, 2000)
})

myPromise.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    }).then(clientData => {
        clientData.fromPromise = true
        return clientData
    }).then(clientData => {
        console.log('client data received', clientData)
    })
}).catch(err => console.error('Error', err))
  .finally(() => console.log('Finally'))

const timeOut = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
timeOut(2000).then( () => console.log(''))

Promise.all([timeOut(3000), timeOut(4000), timeOut(5000)])
    .then( () => {
        console.log('all promises')
    })

Promise.race([timeOut(3000), timeOut(4000), timeOut(5000)])
    .then( () => {
        console.log('race promises')
    })
