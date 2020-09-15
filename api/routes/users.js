// var express = require('express');
// var router = express.Router();
// var user = require('../models/users.js')

// router.post('/', async (request, response) => {
//   try {
//     var users = new user(request.body);
//     var result = await users.save();
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// router.get('/', async (request, response) => {
//   try {
//     var result = await user.find().exec();
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// router.get('/:id', async (request, response) => {
//   try {
//     var users = await user.findById(request.params.id).exec();
//     response.send(users);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// router.put('/:id', async (request, response) => {
//   try {
//     var users = await user.findById(request.params.id).exec();
//     users.set(request.body);
//     var result = await users.save();
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// router.delete('/:id', async (request, response) => {
//   try {
//     var result = await user.deleteOne({ _id: request.params.id }).exec();
//     response.send(result);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// module.exports = router;