var express = require('express');
var router = express.Router();
var admin = require('../models/admin.js')

router.post('/', async (request, response) => {
  try {
    var admins = new admin(request.body);
    var result = await admins.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/', async (request, response) => {
  try {
    var result = await admin.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/:id', async (request, response) => {
  try {
    var admins = await admin.findById(request.params.id).exec();
    response.send(admins);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.put('/:id', async (request, response) => {
  try {
    var admins = await admin.findById(request.params.id).exec();
    admins.set(request.body);
    var result = await admins.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/:id', async (request, response) => {
  try {
    var result = await admin.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;