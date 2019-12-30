import * as faker from 'faker';
import database from '..';
import FactoryInterface from '../../types/Factory';
import UserEntity from '../entities/User';

class User implements FactoryInterface<UserEntity> {
    /**
     * Creates a user instance.
     */
    public make(attributes: Partial<UserEntity> = {}): UserEntity {
        const user = new UserEntity();
        user.id = attributes.id || faker.random.number();
        user.uid = attributes.uid || faker.random.uuid();
        user.email = attributes.email || faker.internet.email();
        user.name = attributes.name || `${faker.name.firstName()} ${faker.name.lastName()}`;
        user.createdBy = attributes.createdBy;
        user.updatedBy = attributes.updatedBy || user.createdBy;

        return user;
    }

    /**
     * Creates a user instance and persists it in the database.
     */
    public async create(attributes: Partial<UserEntity> = {}): Promise<UserEntity> {
        const repository = await database.getRepository(UserEntity);
        const user = this.make(attributes);
        user.id = undefined;

        return repository.save(user);
    }
}

export default User;
