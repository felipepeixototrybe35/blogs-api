const { blogPostsService, postCategoriesService } = require('../services');

const postBlogPost = async (req, res) => {
  // try {
  //   const { body, user } = req;
  //   console.log('User', user);
  //   console.log(body);
  //   const post = await blogPostsService
  //     .postBlogPosts({ ...body, userId: user.id });

  //   const categoryPromises = body.categoryIds.map((categoryId) => 
  //     postCategoriesService.postPostCategory({ postId: post.id, categoryId }));
  //   await Promise.all(categoryPromises);

  //   res.status(201).json(post);
  // } catch (error) {
  //   res.status(500).json(error.message);
  // }
  try {
    const { body, dataUser } = req;

    const post = await blogPostsService.postBlogPosts({ ...body, userId: dataUser.id });

    await Promise.all(body.categoryIds.map(async (category) => {
      await postCategoriesService.postPostCategory({ postId: post.id, categoryId: category });
    }));

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await blogPostsService.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getPostById = async (req, res) => {
  try {
    const { params } = req;
    const post = await blogPostsService.getPostById(params);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  postBlogPost,
  getAllPosts,
  getPostById,
};