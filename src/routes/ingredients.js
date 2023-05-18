'use stirct';

const express = require('express');

const router = express.Router();
const { ingredientModel } = require('../models');


router.get('/ingredient', async (request, response, next) => {
  let foods = await ingredientModel.findAll();

  response.status(200).send(foods);
});

router.get ('/food/:id', async (request, response, next) => {
  let singleIngredient = await ingredientModel.findAll({where: {id: request.params.id}});

  response.status(200).send(singleIngredient);
});

router.post('/food', async(request, response, next) => {
  let newIngredientItem = await ingredientModel.create(request.body);

  response.status(200).send(newIngredientItem);
});

module.exports = router;
