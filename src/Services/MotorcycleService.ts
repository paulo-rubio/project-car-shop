import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleService {
  private model = new MotorcycleModel();

  private static createMotorcycleDomain(motorcycle: IMotorcycle) {
    return new Motorcycle(motorcycle);
  }

  async create(motorcycle: IMotorcycle) {
    const motos = await this.model.create(motorcycle);

    return MotorcycleService.createMotorcycleDomain(motos);
  }

  async findById(id: string) {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');

    const motos = await this.model.findById(id);
    if (!motos) throw new Error('Motorcycle not found');

    return MotorcycleService.createMotorcycleDomain(motos);
  }

  async findAll() {
    const motos = await this.model.findAll();
    return motos.map((moto) => MotorcycleService.createMotorcycleDomain(moto));
  }
}