const LoginService = require('../services/login.service');
const httpStatus = require('../utils/httpStatus');

const createLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await LoginService.login(email, password);
  return res.status(httpStatus[status]).json(data);
};

module.exports = {
  createLogin,
};