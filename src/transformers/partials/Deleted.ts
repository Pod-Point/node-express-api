import { TransformerInterface } from '@pod-point/typescript';
import { userTransformer } from '..';
import DeletedEntity from '../../types/entities/partials/Deleted';
import Action from '../../types/resources/partials/Action';
import DeletedResource from '../../types/resources/partials/Deleted';

class Deleted implements TransformerInterface<DeletedEntity, DeletedResource> {
    public transform(entity: DeletedEntity) {
        if (!entity.deletedBy) {
            return {};
        }

        const deleted: Action = {
            at: entity.deletedAt,
            by: entity.deletedBy,
        };

        if (entity.deleter) {
            deleted.user = userTransformer.transform(entity.deleter);
        }

        return {
            deleted,
        };
    }
}

export default Deleted;
