const express = require('express')
const app = express();
const port = 5000

app.get('/', (req, res) => {
    console.log('User hit Home Page resource');
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    console.log('User hit About Page resource');
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

// app.get
// app.post 
// app.put
// app.delete
// app.all
// app.use
// app.listen

// - Http Methods -

// GET - Read Data
// POST - Insert Data
// PUT - Update Data
// DELETE - Delete Data
