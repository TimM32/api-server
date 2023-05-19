'use strict';



module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('ingredients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
