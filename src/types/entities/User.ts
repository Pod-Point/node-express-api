import Created from './partials/Created';
import Deleted from './partials/Deleted';
import Updated from './partials/Updated';

export enum Relations {
    CREATOR = 'creator',
    UPDATER = 'updater',
    DELETER = 'deleter',
}

interface User extends Created, Updated, Deleted {
    id: number;
    uid: string;
    name: string;
    email: string;
}

export default User;
