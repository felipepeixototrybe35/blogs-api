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

const findUserPost = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await usersService.findEmailUser(body);
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    await usersService.postUser(body);
    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const findAllUsers = async (_req, res) => {
  try {
    const user = await usersService.findAllUsers();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const findIdUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersService.findIdUser(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  findUser,
  findUserPost,
  findAllUsers,
  findIdUser,
};