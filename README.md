Este projeto é fruto do curso de Desenvolvedor Web FullStack da Trybe, por isso os commits vem separados por requisitos. Parte do desenvolvimento do código foi realizado pela Trybe, os arquivos em que eu desenvolvi código são os explícitos nos commits.

Aqui é desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog. Utilizando Node.js e o pacote sequelize para fazer um CRUD de posts.

Requisito 1 >> São criadas as migrations para as tabelas users, categories, blog_posts, posts_categories.

Requisito 2 >> É criado o modelo User em src/models/User.js.

Requisito 3 >> Endpoint POST /login.

Requisito 4 >> Endpoint POST /user.

Requisito 5 >> Endpoint GET /user.
  Com validação de token.
  Este ndpoint é capaz de trazer todos users do banco de dados.

Requisito 6 >> Endpoint GET /user/:id.
  Com validação de token.
  Este endpoint é capaz de trazer o user baseado no id do banco de dados se ele existir.

Requisito 7 >> É criado o modelo Category em src/models/Category.js.

Requisito 8 >> Endpoint POST /categories.
  Com validação de token.
  Este endpoint é capaz de adicionar uma nova categoria a sua tabela no banco de dados.

Requisito 9 >> Endpoint GET /categories.
  Com validação de token.
  Este endpoint é capaz de trazer todas categorias do banco de dados.

Requisito 10 >> É criado o modelo BlogPost em src/models/BlogPost.js.
  A model respeita a associação N:1 com o modelo User.

Requisito 11 >> É criado o modelo PostCategory em src/models/PostCategory.js.
  A model respeita a associação N:N entre o modelo BlogPost e o modelo Category.

Requisito 12 >> Endpoint POST /post.
  Com validação de token.
  Este endpoint é capaz de adicionar um novo blog post e vinculá-lo às categorias em suas tabelas no banco de dados.

Requisito 13 >> Endpoint GET /post.
  Com validação de token.
  Este endpoint é capaz de trazer todos os blogs post, user dono dele e as categorias do banco de dados.

Requisito 14 >> Endpoint GET /post/:id.
  Com validação de token.
  Este endpoint é capaz de trazer o blog post baseado no id do banco de dados se ele existir.

Requisto 15 >> Endpoint PUT /post/:id.
  Com validação de token.
  Este endpoint é capaz de alterar um post do banco de dados, se ele existir.
  A aplicação só permiti a alteração de um blog post caso a pessoa seja dona dele.
  A aplicação não permiti a alteração das categorias do post, somente os atributos title e content podem ser alterados.
