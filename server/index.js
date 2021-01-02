const express = require('express')
const productController = require('./productController')
const products = require('../products.json')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    console.log('Someone got to /')
    res.status(200).send(products)
})

app.get('/api/products', productController.getAllProducts)

app.get('/api/products/:id', productController.getProductByID)

app.listen(4420, () => { console.log('Server is listening on port 4420.')})