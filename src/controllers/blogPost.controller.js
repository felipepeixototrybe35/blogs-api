const { blogPostsService, postCategoriesService } = require('../services');

const postBlogPost = async (req, res) => {
  try {
    const { body, user } = req;
    console.log('User', user);
    const post = await blogPostsService
      .postBlogPosts({ ...body, userId: user.id });

    await Promise.all(body.categoryIds.map(async (category) => {
      await postCategoriesService
        .postPostCategory({ postId: post.id, categoryId: category });
    }));

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { postBlogPost };