import User from '../User';

interface Updated {
    updatedBy: number;
    updatedAt: string;
    updater?: User;
}

export default Updated;
