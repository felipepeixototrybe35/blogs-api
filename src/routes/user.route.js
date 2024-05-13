const route = require('express').Router();

const { usersController } = require('../controllers');
const valideteLogin = require('../middlewares/validationsLogin');
const Token = require('../middlewares/token');

route.post('/login', valideteLogin, usersController.findUser, Token);

module.exports = route;