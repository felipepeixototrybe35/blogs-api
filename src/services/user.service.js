const { User } = require('../models');
const { createToken } = require('../utils/token');
const userValidate = require('../middlewares/validations/userValidation');

const findAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'SUCCESS', data: users };
};

const findById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  return { status: 'SUCCESS', data: user };
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
  return { status: 'SUCCESS', data: user };
};

const create = async ({ displayName, email, password, image }) => {
  const error = userValidate({ displayName, email, password, image });
  if (error) return { status: error.status, data: error.data };

  const existsUser = await User.findOne({ where: { email } });
  if (existsUser) return { status: 'CONFLICT', data: { message: 'User already registered' } };

  const user = await User.create({ displayName, email, password, image });
  if (!user) return { status: 'INTERNAL_ERROR', data: { messagem: 'Something weird happened ' } };
  const token = createToken(email);
  return { status: 'CREATED', data: { token } };
};

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
};