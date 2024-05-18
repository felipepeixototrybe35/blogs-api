const { verifyToken } = require('../utils/token');

const verifyJWT = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ message: 'Token not found' });

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  const payload = verifyToken(token);
  const unixNow = Math.floor(new Date().getTime() / 1000);

  if (!payload || payload.exp < unixNow) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  const { id, email } = payload;
  req.user = { id, email };

  next();
};

module.exports = verifyJWT;