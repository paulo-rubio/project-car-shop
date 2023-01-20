import { expect } from 'chai';
import request from 'supertest';
import sinon from 'sinon';
import { Model } from 'mongoose';
// import service from '../../../src/Services/CarService';
import CarDomains from '../../../src/Domains/Car';
import app from '../../../src/app';
import Connection from '../../../src/Models/Connection';
// import ICar from '../../../src/Interfaces/ICar';
// import car from '../../../src/Models/CarModel';
// import { carOutput } from './mocks.test';
import { validCar } from '../../../__tests__/utils/CarsMock';
import CarService from '../../../src/Services/CarService';
import { carId, carNoId } from './mocks.test';

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
  it('Verifica se retorna o carro com erro de id', async function () {
    sinon.stub(Model, 'findById').resolves({});
    try {
      const service = new CarService();
      await service.findById('errado');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
    sinon.restore();
  });
  it('Verifica se retorna o carro com erro de não encontrado', async function () {
    sinon.stub(Model, 'findById').resolves({});
    try {
      const service = new CarService();
      await service.findById('63c2ab355387e1943d51e142');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
    sinon.restore();
  });
  it('verifica se o update é feito corretamento', async function () {
    sinon.stub(Model, 'findById').resolves(carId);
    sinon.stub(Model, 'update').resolves();
    try {
      const service = new CarService();
      await service.update(carId.id, carNoId);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Car not found');
    }
  });
});