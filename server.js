// Imports
const http = require("http");
const fs = require("fs");
const url = require('url');


// Parameters
const hostname = "localhost";
const port = 8000;

const homepageHTML = fs.readFileSync("./public/index.html", "utf-8");
const headerHTML = fs.readFileSync("./templates/header.html", "utf-8");
const tutorHtml = fs.readFileSync(`${__dirname}/public/tutor.html`, "utf-8");
const courses = JSON.parse(fs.readFileSync(`${__dirname}/files/courses.json`, "utf-8"));

const server = http.createServer((request, response) => {
    const { pathname } = url.parse(request.url, true);

    // Routing
    if (pathname === "/home" || pathname === "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(headerHTML + homepageHTML);
    } else if (request.url === "/courses") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(courses));
    }
    else if (pathname === "/about") {
        response.end("About");
    }else if (request.url === "/tutors") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(tutorHtml);
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

