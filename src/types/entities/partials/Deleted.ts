import User from '../User';

interface Deleted {
    deletedBy: number | null;
    deletedAt: string | null;
    deleter?: User | null;
}

export default Deleted;
