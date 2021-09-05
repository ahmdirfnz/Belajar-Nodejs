const express = require('express')
const app = express()
const port = 5000
const { products } = require('./data')


app.get('/', (req, res) => {
    // res.json([{ name: 'ahmadz' },{ name: 'irfanz' }])
    // res.json(products)
    res.send('<h1> Home Page </h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req, res) => {
    const newProducts = products.map((products) => {
        const {id, name, price} = products;
        return {id, name, price}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
        )
    if (!singleProduct) {
        return res.status(404).send('<h2>Product does not exist</h2>')
    }

    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('Hello World')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const {search, limit} = req.query
    let sortedProducts = [...products];
    
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('No Products Matched Your Search')
         return res.status(200).json({ success:true, data: [] })
    }
    res.status(200).json(sortedProducts)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})