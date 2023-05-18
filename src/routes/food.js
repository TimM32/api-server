'use stirct';

const express = require('express');

const router = express.Router();
const { foodModel } = require('../models');


router.get('/food', async (request, response, next) => {
  let foods = await foodModel.findAll();

  response.status(200).send(foods);
});

router.get ('/food/:id', async (request, response, next) => {
  let singleFood = await foodModel.findAll({where: {id: request.params.id}});

  response.status(200).send(singleFood);
});

router.post('/food', async(request, response, next) => {
  let newFoodItem = await foodModel.create(request.body);

  response.status(200).send(newFoodItem);
});



module.exports = router;
