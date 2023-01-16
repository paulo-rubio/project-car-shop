import express from 'express';
import routes from './Router/Routers';
import ErrorHandler from './MIddleware/ErrorHandler';

const app = express();

app.use(express.json());
app.use(routes);

app.use(ErrorHandler.handle);
export default app;
