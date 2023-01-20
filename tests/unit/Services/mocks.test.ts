import ICar from '../../../src/Interfaces/ICar';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
// import ICar from '../../../src/Interfaces/ICar';

export const carNoId: ICar = ({
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
});

export const carId = ({
  id: '63c2ab355387e1943d51e140',
  ...carNoId,
});

export const arrayCarId = [
  carId,
];

export const motorcyclesNoID: IMotorcycle = {
  model: 'Honda Cbr 1000rr',
  year: 2011,
  color: 'Orange',
  status: true,
  buyValue: 59.900,
  category: 'Street',
  engineCapacity: 1000,
};
export const motorcyclesId = {
  id: '634852326b35b59438fbea31',
  model: 'Honda Cbr 1000rr',
  year: 2011,
  color: 'Orange',
  status: true,
  buyValue: 59.900,
  category: 'Street',
  engineCapacity: 1000,
};

export const arrayMotorcycleId = [
  motorcyclesId,
];

export const b = 'a';