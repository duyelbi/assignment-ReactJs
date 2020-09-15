var express = require('express');
var router = express.Router();
var color = require('../models/colors.js')

router.post('/', async (request, response) => {
  try {
    var colors = new color(request.body);
    var result = await colors.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/', async (request, response) => {
  try {
    var result = await color.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/:id', async (request, response) => {
  try {
    var colors = await color.findById(request.params.id).exec();
    response.send(colors);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.put('/:id', async (request, response) => {
  try {
    var colors = await color.findById(request.params.id).exec();
    colors.set(request.body);
    var result = await colors.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/:id', async (request, response) => {
  try {
    var result = await color.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;