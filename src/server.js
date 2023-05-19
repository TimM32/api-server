'use strict';

const express = require('express');
const cors = require('cors');
const foodRouter = require('./routes/food');
const ingredientRouter = require('./routes/ingredient');

const app = express();
app.use(cors());
app.use(express.json());

app.use(foodRouter);
app.use(ingredientRouter);
app.get('/', (request, response, next) => {
  response.status(200).send('Welcome!');
});

const start = (port) => {
  app.listen(port, () => console.log('serving is on:', port));
};

module.exports = {
  app,
  start,
};
