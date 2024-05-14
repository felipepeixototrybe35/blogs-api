const { Category } = require('../models');

// const findUser = async ({ email, password }) => User
//   .findOne({ where: { email, password } });

// const findNameCategory = async ({ name }) => Category
//   .findOne({ where: { name }, attributes: ['name'] });

const postCategory = async (name) => Category.create({ name });

const findAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
}; 

// const findIdUser = async (id) => {
//   const user = await User
//     .findOne({ where: { id }, attributes: { exclude: ['password'] } });
//   return user;
// };

module.exports = {
//   findUser,
//   findNameCategory,
  postCategory,
  findAllCategories,
//   findIdUser,
};