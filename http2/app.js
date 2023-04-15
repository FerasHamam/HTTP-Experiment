const http2 = require('http2');
const path = require('path');
const fs = require('fs');


const server = http2.createSecureServer({ key: fs.readFileSync('./server.key'), cert: fs.readFileSync('./server.crt') });

server.on('stream', (stream, headers) => {
    const reqPath = headers[http2.constants.HTTP2_HEADER_PATH];
    const fullPath = path.join(__dirname, "./public/images", reqPath);
    stream.respondWithFile(fullPath, {
        'Content-type' : 'image/png'
    }, {
        onError: (err) => {
            stream.respond({ ':status': 400 });
            stream.end();
    }})
})


server.listen('8443', (err) => {
    if (err)
        throw new Error(err);
    console.log('Listening on port 8443');
})