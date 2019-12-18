import Request from '../types/Request';
import Response from '../types/Response';

/**
 * Returns the API's status.
 */
export default function(req: Request, res: Response) {
    const message = 'Hello world!';

    if (req.accepts('application/json')) {
        res.json({
            message,
        });
    } else {
        res.send(message);
    }
}
