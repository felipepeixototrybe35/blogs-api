const route = require('express').Router();
// const { verifyToken2, verifyToken } = require('../middlewares/auth');
const { verifyToken } = require('../middlewares/auth');
const validateBlogPosts = require('../middlewares/validationBlogPost');
const { blogPostController } = require('../controllers');

route.post('/', verifyToken, validateBlogPosts, blogPostController.postBlogPost);

module.exports = route; 