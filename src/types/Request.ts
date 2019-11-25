import { Request as ExpressRequest } from 'express';
import User from './entities/User';
import Language from './i18n/Language';

interface Request extends ExpressRequest {
    language: Language;
    user?: User;
}

export default Request;
