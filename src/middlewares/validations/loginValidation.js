const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().required().messages({
    'string.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  }),
  password: Joi.string().required().messages({
    'string.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  }),
});

const validate = (email, password) => {
  const { error } = schema.validate({ email, password });
  if (error) {
    return { status: 'INVALID_VALUE', data: { message: error.message } };
  }
  return null;
};

module.exports = validate; 