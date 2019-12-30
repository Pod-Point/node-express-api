import Created from './partials/Created';
import Deleted from './partials/Deleted';
import Updated from './partials/Updated';
import UserTransformer from './User';

export const userTransformer = new UserTransformer();

export const createdTransformer = new Created();
export const updatedTransformer = new Updated();
export const deletedTransformer = new Deleted();
