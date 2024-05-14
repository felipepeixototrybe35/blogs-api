const route = require('express').Router();

const { categoryController } = require('../controllers');
const { verifyToken } = require('../middlewares/auth');
const validateCategory = require('../middlewares/validationCategory');

route.post('/', verifyToken, validateCategory, categoryController.categoryPost);
route.get('/', verifyToken, categoryController.findAllCategories );

module.exports = route;