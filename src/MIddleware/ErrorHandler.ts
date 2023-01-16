import { NextFunction, Request, Response } from 'express';
import errorMap from '../Utils/ErrorMap';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { message, type } = errorMap(error.message);
    res.status(type).json({ message });
    next();
  }
}

export default ErrorHandler;