const express = require('express')
const app = express();
const morgan = require('morgan')
const port = 5000
const logger = require('./logger')
const authorize = require('./authorize')
//  request => middleware => response

// 1. use vs route
// 2. options - our own / express / third party

// add route you want in front of logger to specify uses of logger function
// app.use([logger, authorize])             
// app.use(expres.static('./public'))  
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/api/products', (req, res) => {
    res.send('<h1>Products</h1>')
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('<h1>Items</h1>')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})