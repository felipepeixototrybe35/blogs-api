const route = require('express').Router();
// const {  } = require('../middlewares/');
const { verifyToken2 } = require('../middlewares/authentication');
const validateBlogPosts = require('../middlewares/validationBlogPost');
const { blogPostController } = require('../controllers');

route.post('/', verifyToken2, validateBlogPosts, blogPostController.postBlogPost);
route.get('/', verifyToken2, blogPostController.getAllPosts);
route.get('/:id', verifyToken2, blogPostController.getPostById);

module.exports = route; 