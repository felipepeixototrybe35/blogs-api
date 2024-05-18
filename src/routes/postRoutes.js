const route = require('express').Router();
const PostController = require('../controllers/blogPost.controller');
const verifyToken = require('../middlewares/verifyToken');

route.get('/', verifyToken, PostController.findAllPosts);
route.get('/:id', verifyToken, PostController.findPostById);
route.post('/', verifyToken, PostController.createPost);
route.put('/:id', verifyToken, PostController.updatePost);

module.exports = route; 