// Imports
const http = require("http");
<<<<<<< HEAD
const fs = require("fs");
=======
const url = require('url');
const fs = require('fs');
>>>>>>> a7b6bae

// Parameters
const hostname = "localhost";
const port = 8000;

<<<<<<< HEAD
const html = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const tutorHtml = fs.readFileSync(`${__dirname}/tutor.html`, "utf-8");
const courses = JSON.parse(fs.readFileSync(`${__dirname}/courses.json`, "utf-8"));

const server = http.createServer((request, response) => {
    if (request.url === "/courses") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(courses));
    } else if (request.url === "/tutors") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(tutorHtml);
    } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(html);
=======
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
>>>>>>> a7b6bae0d5b933ba950033e2615f9f9101afbaac
    }
});

// Listening on the port
server.listen(port, hostname, () => {
<<<<<<< HEAD
    console.log(`Server running at http://${hostname}:${port}/`);
});
=======
    console.log(`Listening on port ${port}`);
});

>>>>>>> a7b6bae0d5b933ba950033e2615f9f9101afbaac
