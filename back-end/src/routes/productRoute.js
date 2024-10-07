const express = require('express');
const getProduct = require('../controllers/product/getProduct');
const updateProduct = require('../controllers/product/updateProduct');
const deleteProduct = require('../controllers/product/deleteProduct');
const addProduct = require('../controllers/product/addProduct');
const fetchAllProducts = require('../controllers/product/fetchAllProducts');
const authenticate = require('../middlewares/authenticate');

const productRouter = express.Router();

productRouter.get('/', fetchAllProducts);
productRouter.get('/:_id', authenticate, getProduct);
productRouter.post('/add', authenticate, addProduct);
productRouter.patch('/update/:_id', authenticate, updateProduct);
productRouter.delete('/delete/:_id', authenticate, deleteProduct);

module.exports = productRouter;