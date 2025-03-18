// Imports
const http = require("http");
const url = require('url');
const fs = require('fs');

// Parameters
const hostname = "localhost";
const port = 8000;

// Loading html from files
const homepageHTML = fs.readFileSync("./public/index.html", "utf-8");
const headerHTML = fs.readFileSync("./templates/header.html", "utf-8");

const server = http.createServer((request, response) => {
    // Extracting pathname
    const { pathname } = url.parse(request.url, true);

    // Routing
    if (pathname === "/home" || pathname === "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(header + homepageHTML);
    }
    else if (pathname === "/about") {
        response.end("About");
    }
    else {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.end("Page not found");
    }
});

// Listening on the port
server.listen(port, hostname, () => {
    console.log(`Listening on port ${port}`);
});

