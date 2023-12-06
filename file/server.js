var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('<h1>Hello Node!!!</h1>\n');
    response.end();
}).listen(3000);

console.log('server running at http://127.0.0.1:3000/');