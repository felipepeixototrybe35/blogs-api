const { BlogPost } = require('../models');

const postBlogPosts = async (body) => BlogPost.create(body);

module.exports = { postBlogPosts };