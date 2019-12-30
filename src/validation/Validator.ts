import { SchemaLike, validate } from '@hapi/joi';

class Validator<T = any> {
    private schema: SchemaLike;

    /**
     * Sets the validation schema.
     */
    public constructor(schema?: SchemaLike) {
        this.schema = schema;
    }

    /**
     * Returns the validation schema.
     */
    public async getSchema(): Promise<SchemaLike> {
        return Promise.resolve(this.schema);
    }

    /**
     * Validates the given value against the schema.
     */
    public async validate(value: T): Promise<void> {
        const schema = await this.getSchema();
        const result = validate(value, schema);

        if (result.error) {
            return Promise.reject(result.error);
        }

        return Promise.resolve();
    }
}

export default Validator;
