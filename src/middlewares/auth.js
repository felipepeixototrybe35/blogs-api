const jwt = require('jsonwebtoken');

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
    req.user = decoded.email;
    next();
  } catch (error) {
    console.log('erro', error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
};