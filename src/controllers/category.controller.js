const { categoryService } = require('../services');

// const findUser = async ({ body }, res, next) => {
//   try {
//     const user = await usersService.findUser(body);

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid fields' });
//     }
//     next();
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const categoryPost = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoryService.postCategory(name);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findAllCategories = async (_req, res) => {
  try {
    const user = await categoryService.findAllCategories();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// const findIdUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await usersService.findIdUser(id);
//     if (!user) {
//       return res.status(404).json({ message: 'User does not exist' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

module.exports = {
//   findUser,
  categoryPost,
  findAllCategories,
//   findIdUser,
};