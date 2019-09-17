import express from 'express';
import config from './config';
import statusHandler from './handlers/status';

const app = express();

app.use(express.json());

app.get(config.routes.status, statusHandler);

export default app;
