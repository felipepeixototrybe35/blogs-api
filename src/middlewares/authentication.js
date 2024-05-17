const jwt = require('jsonwebtoken');
const { usersService } = require('../services');

// const secret = process.env.JWT_SECRET;
const secret = process.env.JWT_SECRET || 'secretJWT';
const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const verifyToken2 = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = extractToken(bearerToken);
  try {
    const decoded = jwt.verify(token, secret);
    const dataUser = { id: decoded.id, email: decoded.email };
    const isUser = await usersService.findEmailUser(dataUser);

    if (!isUser) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.dataUser = dataUser;
    next();
  } catch (error) {
    console.log('erro', error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { verifyToken2 };