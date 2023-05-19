'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');



const request = supertest(app);

beforeAll( async ()=> {
  await sequelizeDatabase.sync();
});

afterAll( async () => {
  await sequelizeDatabase.drop();
});

describe('Ingredient router', () => {
  test('handles create route', async () => {
    const response = await request.post('/ingredient').send({name: 'test', quantity: 2});
    console.log('Response!', response.body);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.quantity).toEqual(2);
  });

});
