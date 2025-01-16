This project is part of The Odin Project's full stack Javascript curriculum. link to The Odin Project page: https://www.theodinproject.com/lessons/nodejs-basic-informational-site

This project is a basic informational website built with Node.js, along with a refactored version using Express in a separate branch, that emonstrates basic routing and file handling. It serves static HTML files for different routes, including a home page, an about page, and a contact page. Additionally, it handles a 404 error page for non-existent routes. The project demonstrates fundamental concepts in Node.js, such as creating a server, handling routes, and reading HTML files using the built-in fs module. 

Usage: 
1. Clone this repository:
    git@github.com:cdcutshaw/Basic-Informational-Site.git
2. Navigate to browser directory:
    cd Basic-Informational-Site
3. Start the server:
    node index.js
4. Visit http://localhost:8080 in your browser to view the homepage site.
    http://localhost:8080/about --> serves about page
    http://localhost:8080/contact-me --> serves the contact page
    http://localhost:8080/{invalid-file-path} --> serves the error page
