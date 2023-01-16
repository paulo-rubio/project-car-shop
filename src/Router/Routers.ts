import { Router } from 'express';
import CarControler from '../Controllers/CarControler';

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

export default routes;