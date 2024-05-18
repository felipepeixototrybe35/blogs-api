const route = require('express').Router();
const UserController = require('../controllers/users.controller');
const verifyToken = require('../middlewares/verifyToken');

route.get('/', verifyToken, UserController.findAllUsers);
route.get('/:id', verifyToken, UserController.findUserById);
route.post('/', UserController.createUser);

module.exports = route;