const { Sequelize } = require("sequelize");

const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,

  })
  return Category;
}
module.exports = CategoryModel;