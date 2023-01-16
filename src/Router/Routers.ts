import { Router } from 'express';
import CarControler from '../Controllers/CarControler';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarControler(req, res, next).create(),
);
routes.get(
  '/cars',
  (req, res, next) => new CarControler(req, res, next).findAll(),
);
routes.get(
  '/cars/:id',
  (req, res, next) => new CarControler(req, res, next).findById(),
);
routes.put(
  '/cars/:id',
  (req, res, next) => new CarControler(req, res, next).update(),
);
routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

export default routes;