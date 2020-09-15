var express = require('express');
var router = express.Router();
var cate = require('../models/cates.js')

router.post('/', async (request, response) => {
  try {
    var cates = new cate(request.body);
    var result = await cates.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/', async (request, response) => {
  try {
    var result = await cate.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/:id', async (request, response) => {
  try {
    var cates = await cate.findById(request.params.id).exec();
    response.send(cates);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.put('/:id', async (request, response) => {
  try {
    var cates = await cate.findById(request.params.id).exec();
    cates.set(request.body);
    var result = await cates.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/:id', async (request, response) => {
  try {
    var result = await cate.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;