import { Request as ExpressRequest } from 'express';
import User from './entities/User';

interface Request extends ExpressRequest {
    user?: User;
}

export default Request;
