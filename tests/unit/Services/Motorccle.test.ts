import { expect } from 'chai';
import request from 'supertest';
import sinon from 'sinon';
import { Model } from 'mongoose';
// import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleDomains from '../../../src/Domains/Motorcycle';
import app from '../../../src/app';
import Connection from '../../../src/Models/Connection';
// import moto from '../../../src/Models/MotorcycleModel';
import { validMotorcycle } from '../../../__tests__/utils/MotorcyclesMock';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcyclesId, motorcyclesNoID } from './mocks.test';

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
  it('Verifica se retorna o carro com erro de não encontrado', async function () {
    sinon.stub(Model, 'findById').resolves({});
    try {
      const service = new MotorcycleService();
      await service.findById('634852326b35b59438fbea2');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
    sinon.restore();
  });
  it('Verifica se retorna um erro de moto não encontrada', async function () {
    sinon.stub(Model, 'findById').resolves({});
    try {
      const service = new MotorcycleService();
      await service.findById('634852326b35b59438fbea2f');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
    sinon.restore();
  });
  it('verifica se o update é feito corretamento', async function () {
    sinon.stub(Model, 'findById').resolves(motorcyclesNoID);
    sinon.stub(Model, 'update').resolves();
    try {
      const service = new MotorcycleService();
      await service.update(motorcyclesId.id, motorcyclesNoID);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Motorcycle not found');
    }
  });
});