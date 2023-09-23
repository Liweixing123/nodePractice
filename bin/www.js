const http = require('http');

const port = 5002;

const serverHandler = require('../app.js')

const server = http.createServer(serverHandler);

server.listen(port, () => {
    console.log('this is your server')
});
