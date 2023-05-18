'use stict';

const supertest = require('supertest');
const { app } = require('../src/sever');
const { sequelizeDatabase } = require('../src/models');
const { test } = require('node:test');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.sync();
});

describe('Food routes', () => {
  test('create a food item', async ()=> {
    let response = await request.post('/food').send({
      name: 'HotDog',
      ingredient: 'Meat',
      origin: 'America',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('HotDog');
    expect(response.body.ingredient).toEqual('Meat');
  });

  test('get all food items', async() => {
    let response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('HotDog');
    expect(response.body[0].age).toEqual('Meat');
  });

});


