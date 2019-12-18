import { NextFunction } from 'express';
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import Request from '../types/Request';
import Response from '../types/Response';
import ErrorResponse from '../types/responses/Error';

/**
 * Main generic error handler for the application.
 *
 * Any error bubbling up could be intercepted here, including unhandled async
 * errors from unhandled promises thanks to the `express-async-errors` module.
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 * @see https://github.com/davidbanham/express-async-errors
 */
// @ts-ignore
export default function(err: Error, req: Request, res: Response, next: NextFunction) {
    const response: ErrorResponse = {
        error: 'Whoops! Something went wrong.',
    };

    if (err instanceof EntityNotFoundError) {
        const entityName = err.message.match(/entity of type \"(\w+)\"/);

        response.error = `No query results for entity [${entityName[1]}].`;

        return res.status(NOT_FOUND).json(response);
    }

    res.status(INTERNAL_SERVER_ERROR).json(response);
}
