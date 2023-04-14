const https = require('https');
const path = require('path');
const fs = require('fs');
const mime = require('mime-types');

const server = https.createServer({key : fs.readFileSync('./server.key'), cert: fs.readFileSync('./server.crt')},(req, res) => {
    const fullPath = path.join(__dirname, '/public/images', req.url);
    fs.readFile(fullPath, (err, content) => {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            console.log(err);
            res.end('No Image');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(content);
    });
});



server.listen(4040, 'localhost', (err) => {
    if (err)
        throw new Error(err);
    console.log("Listening on port 4040")
})