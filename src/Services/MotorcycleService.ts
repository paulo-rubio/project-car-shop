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
}