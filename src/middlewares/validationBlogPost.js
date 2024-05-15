const Joi = require('joi');
const { categoryService } = require('../services');

const blogPostValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).min(1).required(),
  });

  const reqValidation = async (req, res, next) => {
    const { body } = req;
  
    const { error } = blogPostValidation.validate(body);
  
    if (error) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    const unfoundCategory = await Promise.all(body.categoryIds.map(async (categoryId) => {
      const category = await categoryService.findIdCategory(categoryId);
      return category;
    }));
  
    if (unfoundCategory.some((category) => category === null)) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
  
    next();
  };
  
  module.exports = reqValidation;