var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World! Welcome to Oemfoeland\n');
}).listen(process.env.C9_PORT, '0.0.0.0');

console.log('Server running...');
