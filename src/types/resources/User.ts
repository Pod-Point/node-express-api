import Company from './partials/Company';
import Created from './partials/Created';
import Deleted from './partials/Deleted';
import Updated from './partials/Updated';
import UserCompany from './partials/UserCompany';
import UserRole from './partials/UserRole';
import Role from './Role';

interface User extends Created, Updated, Deleted {
    uid: string;
    name: string;
    email: string;
    company?: Company;
    companies?: UserCompany[];
    role?: Role;
    roles?: UserRole[];
}

export default User;
