'use stirct';

const express = require('express');

const router = express.Router();
const { ingredientModel } = require('../models');

router.get('/ingredient', async (request, response, next) => {
  try {
    let foods = await ingredientModel.findAll();

    response.status(200).send(foods);
  } catch (e) {
    next(e);
  }
});

router.get ('/ingredient/:id', async (request, response, next) => {
  try {
    let singleIngredient = await ingredientModel.findAll({where: {id: request.params.id}});

    response.status(200).send(singleIngredient);
  } catch (e) {
    next (e);
  }
});

router.post('/ingredient', async(request, response, next) => {
  try {
    let newIngredientItem = await ingredientModel.create(request.body);

    response.status(200).send(newIngredientItem);
  } catch (e) {
    next(e);
  }
});

router.put('/ingredient/:id', async (request, response, next) => {
  try {
    await ingredientModel.update(request.body, { where: { id: request.params.id } });

    const updateIngredientItem = await ingredientModel.findByPk(request.params.id);
    response.status(200).send(updateIngredientItem);
  } catch (e) {
    next(e);
  }
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
