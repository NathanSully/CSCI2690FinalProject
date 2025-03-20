const http = require("http");
const fs = require("fs");
const url = require('url');

const hostname = "localhost";
const port = 8000;

const homepageHTML = fs.readFileSync(`${__dirname}/public/index.html`, "utf-8");
const headerHTML = fs.readFileSync(`${__dirname}/templates/header.html`, "utf-8");
const footerHTML = fs.readFileSync(`${__dirname}/templates/footer.html`, "utf-8");
const tutorHtml = fs.readFileSync(`${__dirname}/public/tutor.html`, "utf-8");
const courses = JSON.parse(fs.readFileSync(`${__dirname}/files/courses.json`, "utf-8"));
const searchHtml =  fs.readFileSync(`${__dirname}/public/search.html`, "utf-8");

const server = http.createServer((request, response) => {
    const { pathname } = url.parse(request.url, true);

    if (pathname.startsWith('/files/')) {
        const filePath = `${__dirname}/${pathname}`;
        fs.readFile(filePath, (error, data) => {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.end("File Not Found!");
            } else {
                const extension = filePath.split(".")[-1];
                let contentType = "text/plain";
                if (extension === ".jpeg" || extension === ".jpg") {
                    contentType = "image/jpeg";
                } else if (extension === ".css") {
                    contentType = "text/css";
                } else if (extension === ".js") {
                    contentType = "application/javascript";
                }

                response.writeHead(200, { "Content-Type": contentType });
                response.end(data);
            }
        });
    }
    else if (pathname === "/home" || pathname === "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(headerHTML + homepageHTML + footerHTML);
    }
    else if (pathname === "/courses") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(courses));
    }
    else if (pathname === "/tutor") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(headerHTML +tutorHtml + footerHTML);
    } 
    else if (pathname === "/search"){
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(headerHTML +searchHtml+ footerHTML);
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

