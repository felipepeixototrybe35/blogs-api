const loginValidation = require('../middlewares/validations/loginValidation');
const UserService = require('./user.service');
const { createToken } = require('../utils/token');

const login = async (email, password) => {
  const error = loginValidation(email, password);
  if (error) return { status: error.status, data: error.data };

  const { status, data } = await UserService.findByEmail(email);
  if (status === 'NOT_FOUND') {
    return { status: 'INVALID_VALUE', data: { message: 'Invalid fields' } };
  }
  if (data.password !== password) {
    return { status: 'INVALID_VALUE', data: { message: 'Invalid fields' } };
  }
  const { email: userEmail, id: userId } = data;
  const token = createToken(userId, userEmail);

  return { status: 'SUCCESS', data: { token } };
};

module.exports = {
  login,
};