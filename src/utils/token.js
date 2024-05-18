const jwt = require('jsonwebtoken');

const createToken = (id, email) => {
  const secret = process.env.JWT_SECRET || 'secret';
  const jwtConfig = { expiresIn: '10h', algorithm: 'HS256' };

  const token = jwt.sign({ id, email }, secret, jwtConfig);

  return token;
};

const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET || 'secret';
  const payload = jwt.verify(token, secret);

  return payload;
};

module.exports = {
  createToken,
  verifyToken,
};