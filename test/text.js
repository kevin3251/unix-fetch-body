const http = require('http')
const text = require('../lib/text')
// const postData = querystring.stringify({
//     'msg': 'Hello World!'
// });

const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/',
    method: 'get',
};

const req = http.request(options, async (res) => {
    // console.log(res.headers);
    // console.log(res.rawHeaders);
    // console.log(`STATUS: ${res.statusCode}`);
    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    // res.setEncoding('utf8');
    let size = 0
    res.on('data', (chunk) => {
        size += chunk.byteLength
    });


    res.on('end', async () => {
        console.log('No more data in response.');
        console.log(size)
    });

    // console.log(await parse.text(res))
    console.log(await text(res))
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.end();
