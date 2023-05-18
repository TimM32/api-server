'use strict';



module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('ingredients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
