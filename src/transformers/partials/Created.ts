import { TransformerInterface } from '@pod-point/typescript';
import { userTransformer } from '..';
import CreatedEntity from '../../types/entities/partials/Created';
import Action from '../../types/resources/partials/Action';
import CreatedResource from '../../types/resources/partials/Created';

class Created implements TransformerInterface<CreatedEntity, CreatedResource> {
    /**
     * Transforms the entities creation meta.
     */
    public transform(entity: CreatedEntity) {
        const created: Action = {
            at: entity.createdAt,
            by: entity.createdBy,
        };

        if (entity.creator) {
            created.user = userTransformer.transform(entity.creator);
        }

        return {
            created,
        };
    }
}

export default Created;
