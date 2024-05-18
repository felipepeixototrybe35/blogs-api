const { BlogPost, PostCategory, Category, User } = require('../models');
const { createValidate, upDateValidate } = require('../middlewares/validations/postValidation');
const { checkCategories } = require('./category.service');

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return { status: 'SUCCESS', data: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  return { status: 'SUCCESS', data: post };
};
const create = async (id, title, content, categoryIds) => {
  const error = createValidate(title, content, categoryIds);
  if (error) return { status: error.status, data: error.data };
  const exists = await checkCategories(categoryIds);
  if (!exists) {
    return { status: 'INVALID_VALUE', data: { message: 'one or more "categoryIds" not found' } };
  }
  const post = await BlogPost.create({ title, content, userId: id });
  await PostCategory.bulkCreate(categoryIds.map((categoryId) => ({
    postId: post.id,
    categoryId,
  })));
  return { status: 'CREATED', data: post };
};
const updatePost = async (userId, id, title, content) => {
  const error = upDateValidate(title, content);
  if (error) return { status: error.status, data: error.data };
  const post = await BlogPost.findByPk(id);
  if (userId !== post.userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }
  await BlogPost.update({ title, content }, { where: { id } });
  const newPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return { status: 'SUCCESS', data: newPost };
};

module.exports = { findAll, findById, create, updatePost };