import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model = new CarModel();

  private static createCarDomain(car: ICar) {
    return new Car(car);
  }

  async findAll() {
    const cars = await this.model.findAll();
    return cars.map((car) => CarService.createCarDomain(car));
  }

  async create(car: ICar) {
    const cars = await this.model.create(car);

    return CarService.createCarDomain(cars);
  }

  async findById(id: string) {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');

    const car = await this.model.findById(id);
    if (!car) throw new Error('Car not found');

    return CarService.createCarDomain(car);
  }

  async update(id: string, data: ICar) {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');

    const car = await this.model.findById(id);
    if (!car) throw new Error('Car not found');

    await this.model.update(id, data);

    return CarService.createCarDomain({ ...data, id });
  }
}