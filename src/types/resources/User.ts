import Created from './partials/Created';
import Deleted from './partials/Deleted';
import Updated from './partials/Updated';

interface User extends Created, Updated, Deleted {
    uid: string;
    name: string;
    email: string;
}

export default User;
