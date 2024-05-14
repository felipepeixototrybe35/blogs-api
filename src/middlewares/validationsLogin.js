const Joi = require('joi');

const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const reqValidation = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const { error } = loginValidation.validate({ email, password });
  if (error) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = reqValidation; 