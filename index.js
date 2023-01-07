var http = require('http');

const host = 'localhost';
const port = 3000;

const requireListener = function(req, res){
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.send(`<html><body><h1>I Just created my first server</h1></body></html>`);
    res.end();
}

var server = http.createServer(requireListener);

server.listen(port, host, function() {
    console.log(`Server is running on http://${host}/${port}`);
});