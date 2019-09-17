interface Factory<T> {
    /**
     * Creates an instance of the entity.
     */
    make(attributes: Partial<T>): T;

    /**
     * Creates an instance of the entity and persists it in storage.
     */
    create(attributes: Partial<T>): Promise<T>;
}

export default Factory;
