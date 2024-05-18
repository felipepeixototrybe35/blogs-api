const Joi = require('joi');
// const { newUserSchema } = require('./schema.js');

const newUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().optional(),
});

const validate = (userData) => {
  const { error } = newUserSchema.validate(userData);
  if (error) {
    return { status: 'INVALID_VALUE', data: { message: error.message } };
  }

  return null;
};

module.exports = validate; 