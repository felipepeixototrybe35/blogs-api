const CategoryService = require('../services/category.service');
const httpStatusMap = require('../utils/httpStatus');

const findAllCategories = async (_req, res) => {
  const { status, data } = await CategoryService.findAll();
  return res.status(httpStatusMap[status]).json(data);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const { status, data } = await CategoryService.create(name);
    return res.status(httpStatusMap[status]).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findAllCategories,
  createCategory,
};