const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
    },
  {
    tableName: 'users',
    timeStamps: false,
  });
    return User;
  };
  
  module.exports = userModel;