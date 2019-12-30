import User from '../User';

interface Action {
    by: number;
    at: string;
    user?: User;
}

export default Action;
