'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const ingredent = require('./ingredient');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const foodModel = food(sequelizeDatabase, DataTypes);
const ingredientModel =ingredent(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  foodModel,
  ingredientModel,
};
