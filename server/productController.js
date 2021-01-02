const products = require('../products.json')

module.exports = {
    getAllProducts: (req, res) => {
        if (req.query.price) {
            let items = products.filter(e => e.price <= +req.query.price)
            if (items.length != 0) {
                res.status(200).send(items)
            } else {
                res.sendStatus(404)
            }
        } else {
            res.status(200).send(products)
        }
    },

    getProductByID: (req, res) => {
        console.log('Got to getProductByID...')
        console.log(req.params.id)
        const product = products.find(e => e.id === +req.params.id)
        if (!product) {
            res.sendStatus(404)
        } else {
            res.status(200).send(product)
        }
    }
}