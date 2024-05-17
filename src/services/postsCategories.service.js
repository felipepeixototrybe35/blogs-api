const { PostCategory } = require('../models');

const postPostCategory = async ({ postId, categoryId }) => PostCategory
  .create({ postId, categoryId });

module.exports = { postPostCategory };