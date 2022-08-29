import { BaseEntity } from '../base.entity';

export interface CreateAssignmentEntity extends BaseEntity {
  name: string;
  messageId: string;
}
