import User from '../User';

interface Created {
    createdBy: number;
    createdAt: string;
    creator?: User;
}

export default Created;
