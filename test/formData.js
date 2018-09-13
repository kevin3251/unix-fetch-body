const http = require('http')
const text = require('../lib/text')
const qs = require('qs')
// const postData = querystring.stringify({
//     'msg': 'Hello World!'
// })

const options = {
    hostname: 'www.computex.biz',
    port: 80,
    path: '/PhotoPool2/201604/201604221155226012.jpg',
    method: 'get',
}

const req = http.request(options, async (res) => {
    let size = 0
    res.on('data', (chunk) => {
        size += chunk.byteLength
    })

    console.log(res.headers)
    res.on('end', async () => {
        console.log('No more data in response.')
        console.log(size)
    })

    console.log(await qs.parse(text(res)))
    // console.log(await text(res))
})

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`)
})

// write data to request body
req.end()
