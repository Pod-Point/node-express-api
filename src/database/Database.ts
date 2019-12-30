import {
    Connection as DatabaseConnection,
    ConnectionManager,
    ConnectionOptions,
    createConnection,
    getConnectionManager,
    ObjectType,
    Repository,
} from 'typeorm';
import config from '../config';
import User from './entities/User';

class Database {
    private connectionManager: ConnectionManager;

    public constructor() {
        this.connectionManager = getConnectionManager();
    }

    /**
     * Returns a database connection.
     */
    public async getConnection(): Promise<DatabaseConnection> {
        const name: string = 'default';

        let connection: DatabaseConnection;

        if (this.connectionManager.has(name)) {
            connection = await this.connectionManager.get(name);

            if (!connection.isConnected) {
                connection = await connection.connect();
            }
        } else {
            const driver: string = process.env.DB_DRIVER || 'mysql';
            const options: ConnectionOptions = {
                ...config.database[driver],
                driver,
                entities: [
                    User,
                ],
            };

            connection = await createConnection(options);
        }

        return connection;
    }

    /**
     * Returns a database repository.
     */
    public async getRepository<Entity>(entity: ObjectType<Entity>): Promise<Repository<Entity>> {
        const connection: DatabaseConnection = await this.getConnection();

        return connection.getRepository(entity);
    }
}

export default Database;
