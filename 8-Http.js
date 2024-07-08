const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
    } else if (req.url === '/about') {
        res.end("My name is Jasmeet. I am learning Node.JS.");
    } else {
        res.end(
            `<h1>Oops!! Wrong Input.</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <a href="/">Back Home!!</a>`
        );
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
