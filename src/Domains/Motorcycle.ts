import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    const { id, model, year, color, status, buyValue } = moto;

    super({ id, model, year, color, status, buyValue });
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }
}