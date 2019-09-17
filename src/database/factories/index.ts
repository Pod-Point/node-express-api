import CardFactory from './Card';
import CardCompanyFactory from './CardCompany';
import CardStatusFactory from './CardStatus';
import CardTagFactory from './CardTag';
import RoleFactory from './Role';
import TagFactory from './Tag';
import UserFactory from './User';
import UserCompanyFactory from './UserCompany';
import UserRoleFactory from './UserRole';

export const cardFactory = new CardFactory();
export const cardCompanyFactory = new CardCompanyFactory();
export const cardStatusFactory = new CardStatusFactory();
export const cardTagFactory = new CardTagFactory();
export const roleFactory = new RoleFactory();
export const tagFactory = new TagFactory();
export const userFactory = new UserFactory();
export const userCompanyFactory = new UserCompanyFactory();
export const userRoleFactory = new UserRoleFactory();
