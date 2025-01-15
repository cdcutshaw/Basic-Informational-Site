const http = require('http');
const url = require('url');
const fs = require('fs');

function serveFile (filePath, res)  {
    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500: Server Error</h1>');
            console.error(err);
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

http.createServer(function (req, res) {
    const path = url.parse(req.url, true).pathname;

    if (path === '/') {
        serveFile('index.html', res);
    } else if (path === '/about') {
        serveFile('about.html', res);
    } else if (path === '/contact-me') {
        serveFile('contact-me.html', res);
    } else {
        serveFile('404.html', res);
    }
  }).listen(8080);