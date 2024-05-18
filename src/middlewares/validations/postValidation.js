const Joi = require('joi');

const phraseRes = 'Some required fields are missing';
const schema = Joi.object({
  title: Joi.string().required().messages({
    'string.required': phraseRes,
    'string.empty': phraseRes,
  }),
  content: Joi.string().required().messages({
    'string.required': phraseRes,
    'string.empty': phraseRes,
  }),
  categoryIds: Joi.array().items(Joi.number()).required().messages({
    'string.required': phraseRes,
    'string.empty': phraseRes,
  }),
});

const createValidate = (title, content, categoryIds) => {
  const { error } = schema.validate({ title, content, categoryIds });
  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };

  return null;
};

const upDateSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.required': phraseRes,
    'string.empty': phraseRes,
  }),
  content: Joi.string().required().messages({
    'string.required': phraseRes,
    'string.empty': phraseRes,
  }),
});

const upDateValidate = (title, content) => {
  const { error } = upDateSchema.validate({ title, content });
  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };
  return null;
};

module.exports = {
  createValidate,
  upDateValidate,
};