const jwt = require('jsonwebtoken');
// const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'secretJWT';
const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const verifyToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = extractToken(bearerToken);
  try {
    const decoded = jwt.verify(token, secret);
    console.log('Decoded', decoded);
    req.user = decoded.email;
    next();
  } catch (error) {
    console.log('erro', error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

// const verifyToken2 = async (req, res, next) => {
//   try {
//     const auth = req.headers.authorization;

//     if (!auth) {
//       return res.status(401).json({ message: 'Token not found' });
//     }
//     const token = auth.split(' ')[1];
//     const decoded = jwt.verify(token, secret);

//     const dataUser = { id: decoded.id, email: decoded.email };
//     const findUserExists = async ({ email }) => {
//       const user = await User.findOne({ where: { email }, attributes: ['email'] });
//       return user;
//     };
//     const isUser = await findUserExists(dataUser);

//     if (!isUser) {
//       return res.status(401).json({ message: 'User not found' });
//     }
//     req.dataUser = dataUser;

//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Expired or invalid token' });
//   }
// };

module.exports = {
  verifyToken,
  // verifyToken2,
};