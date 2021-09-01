const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is out about page')
    }
    res.end(`
        <h1>Hahahha!!!</h1>
        <p>Sorry your page you want to see is not available</p>
        <a href="/">Back Home</a>
        `)
})

server.listen(5000)