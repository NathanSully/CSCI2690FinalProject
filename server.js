const http = require("http");

const hostname = "localhost";
const port = 8000;

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h1>Hello from the server-side!</h1>");
});

server.listen(port, hostname, () => {
    console.log(`Listening on port ${800}`);
});