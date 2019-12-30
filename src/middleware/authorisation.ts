import { NextFunction } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';
import database from '../database';
import User from '../database/entities/User';
import Request from '../types/Request';
import Response from '../types/Response';

/**
 * Authorises the request based on the authorization header.
 */
export default async function(req: Request, res: Response, next: NextFunction) {
    const header = req.header('authorization');

    if (header) {
        const auth = header.split(' ');
        const type = auth[0];
        const token = auth[1];

        // TODO: change the authorisation logic suit the API
        if (type === 'User') {
            const userRepository = await database.getRepository(User);
            const user = await userRepository.findOne({
                where: {
                    uid: token,
                },
            });

            if (user) {
                req.user = user;

                return Promise.resolve(next());
            }
        }
    }

    return Promise.resolve(res.status(UNAUTHORIZED).json());
}
