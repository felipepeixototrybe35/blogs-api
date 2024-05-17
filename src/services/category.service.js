const { Category } = require('../models');

const postCategory = async (name) => Category.create({ name });

const findAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
}; 

const findIdCategory = async (id) => Category.findByPk(id);

module.exports = {
  postCategory,
  findAllCategories,
  findIdCategory,
};