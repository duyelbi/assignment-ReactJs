var express = require('express');
var router = express.Router();
var size = require('../models/sizes.js')

router.post('/', async (request, response) => {
  try {
    var sizes = new size(request.body);
    var result = await sizes.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/', async (request, response) => {
  try {
    var result = await size.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/:id', async (request, response) => {
  try {
    var sizes = await size.findById(request.params.id).exec();
    response.send(sizes);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.put('/:id', async (request, response) => {
  try {
    var sizes = await size.findById(request.params.id).exec();
    sizes.set(request.body);
    var result = await sizes.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/:id', async (request, response) => {
  try {
    var result = await size.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;