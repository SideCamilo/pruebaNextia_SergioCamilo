'use strict'
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Server is working</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`);
});