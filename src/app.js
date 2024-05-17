const express = require('express');
const loginRoutes = require('./routes/login.route');
const userRoutes = require('./routes/user.route');
const categoryRoutes = require('./routes/category.route');
const blogPostRoutes = require('./routes/blogPost.route');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', blogPostRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
