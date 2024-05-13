const jwt = require('jsonwebtoken');

const Token = (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new Error('Email is required');
    }

    const token = jwt.sign({ user: email }, process.env.JWT_SECRET, { algorithm: 'HS256' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = Token;