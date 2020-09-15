var express = require('express');
var router = express.Router();
var blogPost = require('../models/blogPost.js')

router.post('/', async (request, response) => {
  try {
    var blogPosts = new blogPost(request.body);
    var result = await blogPosts.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/', async (request, response) => {
  try {
    var result = await blogPost.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/:id', async (request, response) => {
  try {
    var blogPosts = await blogPost.findById(request.params.id).exec();
    response.send(blogPosts);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.put('/:id', async (request, response) => {
  try {
    var blogPosts = await blogPost.findById(request.params.id).exec();
    blogPosts.set(request.body);
    var result = await blogPosts.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/:id', async (request, response) => {
  try {
    var result = await blogPost.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;