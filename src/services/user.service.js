// const { userModel } = require('../models');
const { User } = require('../models');

const findUser = async ({ email, password }) => User
  .findOne({ where: { email, password } });

module.exports = {
  findUser,
};