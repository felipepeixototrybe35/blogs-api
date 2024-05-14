const route = require('express').Router();

const { usersController } = require('../controllers');

const validateUser = require('../middlewares/validationsUser');
const Token = require('../middlewares/token');
const { verifyToken } = require('../middlewares/auth');

route.post('/', validateUser, usersController.findUserPost, Token);
route.get('/', verifyToken, usersController.findAllUsers);
route.get('/:id', verifyToken, usersController.findIdUser);

module.exports = route;