import * as Sentry from '@sentry/node';
import express from 'express';
import 'express-async-errors';
import config from './config';
import statusHandler from './handlers/status';
import errorMiddleware from './middleware/error';
import languageMiddleware from './middleware/language';

const app = express();

if (process.env.SENTRY_DSN !== '') {
    Sentry.init({ dsn: process.env.SENTRY_DSN });
    app.use(Sentry.Handlers.requestHandler() as express.RequestHandler);
}

app.use(express.json());

app.use(languageMiddleware);

app.get(config.routes.status, statusHandler);

if (process.env.SENTRY_DSN !== '') {
    app.use(Sentry.Handlers.errorHandler() as express.ErrorRequestHandler);
}

app.use(errorMiddleware);

export default app;
