import language from '../i18n/language';
import translations from '../i18n/translations';
import Request from '../types/Request';
import Response from '../types/Response';

/**
 * Returns the API's status.
 */
export default function(req: Request, res: Response) {
    const message = language(translations.helloWorld, req.language);

    if (req.accepts('application/json')) {
        res.json({
            message,
        });
    } else {
        res.send(message);
    }
}
