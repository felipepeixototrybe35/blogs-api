const { PostCategory } = require('../models');

const postPostCategory = async ({ postId, categoryId }) => {
  const post = await PostCategory.create({ postId, categoryId });

  return post;
};

module.exports = { postPostCategory };