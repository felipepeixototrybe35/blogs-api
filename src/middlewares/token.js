const jwt = require('jsonwebtoken');

const Token = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new Error('Email is required');
    }

    const token = jwt.sign({ user: email }, process.env.JWT_SECRET, { algorithm: 'HS256' });
    const path = req.originalUrl.replace(/\?.*$/, '');
    const status = path === '/login' ? 200 : 201;
    
    res.status(status).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = Token;