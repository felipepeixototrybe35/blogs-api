const route = require('express').Router();
const LoginController = require('../controllers/login.controller');

route.post('/', LoginController.createLogin);

module.exports = route;