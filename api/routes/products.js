var express = require('express');
var router = express.Router();
var product = require('../models/products.js')

router.post('/', async (request, response) => {
  try {
    var products = new product(request.body);
    var result = await products.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/', async (request, response) => {
  try {
    var result = await product.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/:id', async (request, response) => {
  try {
    var products = await product.findById(request.params.id).exec();
    response.send(products);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.put('/:id', async (request, response) => {
  try {
    var products = await product.findById(request.params.id).exec();
    products.set(request.body);
    var result = await products.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/:id', async (request, response) => {
  try {
    var result = await product.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;