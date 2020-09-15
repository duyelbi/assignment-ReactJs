var express = require('express');
var router = express.Router();
var cart = require('../models/carts.js')

router.post('/', async (request, response) => {
  try {
    var carts = new cart(request.body);
    var result = await carts.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/', async (request, response) => {
  try {
    var result = await cart.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/:id', async (request, response) => {
  try {
    var carts = await cart.findById(request.params.id).exec();
    response.send(carts);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.put('/:id', async (request, response) => {
  try {
    var carts = await cart.findById(request.params.id).exec();
    carts.set(request.body);
    var result = await carts.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/:id', async (request, response) => {
  try {
    var result = await cart.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;