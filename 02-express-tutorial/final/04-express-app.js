const express = require('express')
const path = require('path')
const app = express();

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('/static', path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).sendFile('Resource Not Found')
})

app.listen(5000, () => {
    console.log('Server is listening on port 50000');
})