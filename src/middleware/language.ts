import { NextFunction } from 'express';
import config from '../config';
import Language from '../types/i18n/Language';
import Request from '../types/Request';
import Response from '../types/Response';

/**
 * Sets the request language based on the language header,
 * falling back to the default from config if it is not found or not supported.
 */
// @ts-ignore
export default function(req: Request, res: Response, next: NextFunction) {
    let language = req.header('accept-language');

    if (!language || !config.i18n.languages.includes(language)) {
        language = config.i18n.language;
    }

    req.language = language as Language;

    next();
}
