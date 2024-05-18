const UserService = require('../services/user.service');
const httpStatusMap = require('../utils/httpStatus');

const findAllUsers = async (_req, res) => {
  const { status, data } = await UserService.findAll();
  return res.status(httpStatusMap[status]).json(data);
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const { status, data } = await UserService.findById(id);
    return res.status(httpStatusMap[status]).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const userData = req.body;
  const { status, data } = await UserService.create(userData);
  return res.status(httpStatusMap[status]).json(data);
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
};