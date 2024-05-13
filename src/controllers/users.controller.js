const { usersService } = require('../services');

const findUser = async ({ body }, res, next) => {
  try {
    const user = await usersService.findUser(body);

    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findUser,
};