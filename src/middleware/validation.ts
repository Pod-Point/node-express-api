import { NextFunction } from 'express';
import { UNPROCESSABLE_ENTITY } from 'http-status-codes';
import Request from '../types/Request';
import Response from '../types/Response';
import Validator from '../validation/Validator';

/**
 * Validates the request against the given schema.
 */
export default function(validator: Validator) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await validator.validate(req.body);
        } catch (error) {
            res.status(UNPROCESSABLE_ENTITY).json({ error });

            return Promise.resolve();
        }

        next();

        return Promise.resolve();
    };
}
