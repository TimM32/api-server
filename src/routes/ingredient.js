'use stirct';

const express = require('express');

const router = express.Router();
const { ingredientModel } = require('../models');

router.get('/ingredient', async (request, response, next) => {
  let foods = await ingredientModel.findAll();

  response.status(200).send(foods);
});

router.get ('/ingredient/:id', async (request, response, next) => {
  let singleIngredient = await ingredientModel.findAll({where: {id: request.params.id}});

  response.status(200).send(singleIngredient);
});

router.post('/ingredient', async(request, response, next) => {
  let newIngredientItem = await ingredientModel.create(request.body);

  response.status(200).send(newIngredientItem);
});

router.put('/ingredient/:id', async (request, response, next) => {
  await ingredientModel.update(request.body, { where: { id: request.params.id } });

  const updateIngredientItem = await ingredientModel.findByPk(request.params.id);
  response.status(200).send(updateIngredientItem);

});

router.delete('/ingredient/:id', async (request, response, next) => {
  try {
    const deletedFood = await ingredientModel.findByPk(request.params.id);
    await ingredientModel.destroy({ where: {id: request.params.id }});
    response.staus(200).send(deletedFood);
  } catch (e) {
    next(e);
  }


});

module.exports = router;
