import { TransformerInterface } from '@pod-point/typescript';
import { userTransformer } from '..';
import UpdatedEntity from '../../types/entities/partials/Updated';
import Action from '../../types/resources/partials/Action';
import UpdatedResource from '../../types/resources/partials/Updated';

class Updated implements TransformerInterface<UpdatedEntity, UpdatedResource> {
    public transform(entity: UpdatedEntity) {
        const updated: Action = {
            at: entity.updatedAt,
            by: entity.updatedBy,
        };

        if (entity.updater) {
            updated.user = userTransformer.transform(entity.updater);
        }

        return {
            updated,
        };
    }
}

export default Updated;
