const route = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');
const CategoryController = require('../controllers/category.controller');

route.get('/', verifyToken, CategoryController.findAllCategories);
route.post('/', verifyToken, CategoryController.createCategory);

module.exports = route;