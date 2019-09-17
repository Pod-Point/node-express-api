import CardTransformer from './Card';
import Created from './partials/Created';
import Deleted from './partials/Deleted';
import Updated from './partials/Updated';
import RoleTransformer from './Role';
import TagTransformer from './Tag';
import UserTransformer from './User';

export const cardTransformer = new CardTransformer();
export const roleTransformer = new RoleTransformer();
export const tagTransformer = new TagTransformer();
export const userTransformer = new UserTransformer();

export const createdTransformer = new Created();
export const updatedTransformer = new Updated();
export const deletedTransformer = new Deleted();
