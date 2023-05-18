'use strict';



module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('foods', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      values: ['onions', 'strawberries', 'potatoes', 'milk'],
      allowNull: true,
    },
    origin: {
      type: DataTypes.STRING,
      values: ['italy', 'america', 'france', 'mexcio'],
      allowNull: true,
    },
  });
};

