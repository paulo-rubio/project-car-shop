// import { expect } from 'chai';
import request from 'supertest';
import sinon from 'sinon';
import { Model } from 'mongoose';
// import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleDomains from '../../../src/Domains/Motorcycle';
import app from '../../../src/app';
import Connection from '../../../src/Models/Connection';
// import moto from '../../../src/Models/MotorcycleModel';
import { validMotorcycle } from '../../../__tests__/utils/MotorcyclesMock';

describe('Testes em Motorcycle', function () {
  it('buscar todos as motos', async function () {
    await request(app).get('./motorcycles');
  });
  it('criar um carro', async function () {
    const result = new MotorcycleDomains({ ...validMotorcycle });
    sinon.stub(Model, 'create').resolves(result);
  });
  it('enviando um carro valido', async function () {
    await Connection();
    sinon.restore();
    await request(app).post('/motorcycles').send(validMotorcycle);
  });
});