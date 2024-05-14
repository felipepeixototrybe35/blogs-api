const route = require('express').Router();

const { usersController } = require('../controllers');

const validateLogin = require('../middlewares/validationsLogin');
const Token = require('../middlewares/token');

route.post('/', validateLogin, usersController.findUser, Token);

module.exports = route;