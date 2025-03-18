const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 8000;

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
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
