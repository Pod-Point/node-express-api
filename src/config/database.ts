import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import mysql from '../config/orm';

const sqlite: SqliteConnectionOptions = {
    database: `.database/${process.env.DB_DATABASE}`,
    synchronize: true,
    type: 'sqlite',
};

export default {
    mysql,
    sqlite,
};
