const express = require('express');
const getProduct = require('../controllers/product/getProduct');
const updateProduct = require('../controllers/product/updateProduct');
const deleteProduct = require('../controllers/product/deleteProduct');
const addProduct = require('../controllers/product/addProduct');
const fetchAllProducts = require('../controllers/product/fetchAllProducts');

const productRouter = express.Router();

productRouter.get('/', fetchAllProducts);
productRouter.get('/:_id', getProduct);
productRouter.post('/add', addProduct);
productRouter.patch('/update/:_id', updateProduct);
productRouter.delete('/delete/:_id', deleteProduct);

module.exports = productRouter;