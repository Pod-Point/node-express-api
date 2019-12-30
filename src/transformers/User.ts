import { TransformerInterface } from '@pod-point/typescript';
import { createdTransformer, deletedTransformer, updatedTransformer } from '.';
import UserEntityInterface from '../types/entities/User';
import UserResource from '../types/resources/User';

class User implements TransformerInterface<UserEntityInterface, UserResource> {
    /**
     * Transforms a user entity into a user resource.
     */
    public transform(user: UserEntityInterface) {
        const resource: UserResource = {
            email: user.email,
            name: user.name,
            uid: user.uid,

            ...createdTransformer.transform(user),
            ...updatedTransformer.transform(user),
            ...deletedTransformer.transform(user),
        };

        return resource;
    }
}

export default User;
