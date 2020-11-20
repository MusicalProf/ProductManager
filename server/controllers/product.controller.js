const {Product} = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World! Welcome to the Product Manager"
    });
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
    .then((allProducts) => res.json({products: allProducts}))
    .catch(err => res.json({message: 'Not finding any products here yo.', error: err}))
}

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price, 
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err));
}