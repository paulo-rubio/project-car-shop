import { expect } from 'chai';
import request from 'supertest';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import CarDomains from '../../../src/Domains/Car';
import app from '../../../src/app';
import Connection from '../../../src/Models/Connection';
import car from '../../../src/Models/CarModel';
import { validCar, updatedCar } from '../../../__tests__/utils/CarsMock';

describe('Testes em Car', function () {
  it('buscar todos os carros', async function () {
    await request(app).get('./cars');
  });
  it('criar um carro', async function () {
    const result = new CarDomains({ ...validCar });
    sinon.stub(Model, 'create').resolves(result);
  });
  it('enviando um carro valido', async function () {
    await Connection();
    sinon.restore();
    await request(app).post('/cars').send(validCar);
  });
});