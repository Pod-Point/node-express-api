import express from 'express';
import 'express-async-errors';
import config from './config';
import statusHandler from './handlers/status';
import errorMiddleware from './middleware/error';

const app = express();

app.use(express.json());

app.get(config.routes.status, statusHandler);

app.use(errorMiddleware);

export default app;
