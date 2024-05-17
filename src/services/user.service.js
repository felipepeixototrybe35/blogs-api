const { User } = require('../models');

const findUser = async ({ email, password }) => User
  .findOne({ where: { email, password } });

const findEmailUser = async ({ email }) => {
  const user = await User.findOne({ where: { email }, attributes: ['email'] });
  return user;
};

const postUser = async (body) => User.create(body);

const findAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
}; 

const findIdUser = async (id) => {
  const user = await User
    .findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
  findUser,
  findEmailUser,
  postUser,
  findAllUsers,
  findIdUser,
};