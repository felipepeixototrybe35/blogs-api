const Joi = require('joi');
const { Op } = require('sequelize');
const { Category } = require('../models');

const findAll = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESS', data: categories };
};

const create = async (name) => {
  const schema = Joi.object({ name: Joi.string().required() });
  const { error } = schema.validate({ name });
  
  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };
  const category = await Category.create({ name });
  return { status: 'CREATED', data: category };
};

const checkCategories = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({
    where: { id: { [Op.in]: categoryIds } },
  });
  return count === categoryIds.length;
};

module.exports = {
  findAll,
  create,
  checkCategories,
};