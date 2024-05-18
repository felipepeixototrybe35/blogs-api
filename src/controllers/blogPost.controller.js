const PostService = require('../services/blogPost.service');
const httpStatusMap = require('../utils/httpStatus');

const findAllPosts = async (_req, res) => {
  try {
    const { status, data } = await PostService.findAll();
    return res.status(httpStatusMap[status]).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const { status, data } = await PostService.findById(id);
    return res.status(httpStatusMap[status]).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  try {
    const { status, data } = await PostService.create(id, title, content, categoryIds);
    return res.status(httpStatusMap[status]).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;

  try {
    const { status, data } = await PostService.updatePost(userId, id, title, content);
    return res.status(httpStatusMap[status]).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findAllPosts,
  findPostById,
  createPost,
  updatePost,
};