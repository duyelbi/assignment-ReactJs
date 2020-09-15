var express = require('express');
var router = express.Router();
var tag = require('../models/tags.js')

router.post('/', async (request, response) => {
  try {
    var tags = new tag(request.body);
    var result = await tags.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/', async (request, response) => {
  try {
    var result = await tag.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/:id', async (request, response) => {
  try {
    var tags = await tag.findById(request.params.id).exec();
    response.send(tags);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.put('/:id', async (request, response) => {
  try {
    var tags = await tag.findById(request.params.id).exec();
    tags.set(request.body);
    var result = await tags.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/:id', async (request, response) => {
  try {
    var result = await tag.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;