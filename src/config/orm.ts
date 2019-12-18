export = {
    cli: {
        entitiesDir: 'src/database/entities',
        migrationsDir: 'src/database/migrations',
        subscribersDir: 'src/database/subscribers',
    },
    database: process.env.DB_DATABASE,
    entities: [
        'src/database/entities/**/*.ts',
    ],
    host: process.env.DB_HOST || '127.0.0.1',
    migrations: [
        'src/database/migrations/**/*.ts',
    ],
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 3306,
    subscribers: [
        'src/database/subscribers/**/*.ts',
    ],
    synchronize: false,
    type: process.env.DB_DRIVER || 'mysql',
    username: process.env.DB_USERNAME,
};
