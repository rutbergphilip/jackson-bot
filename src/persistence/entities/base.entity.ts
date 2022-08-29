import { ObjectId } from 'mongodb';

export interface BaseEntity {
  _id?: ObjectId;
  isArchived?: boolean;
  createdAt?: number;
  updatedAt?: number;
}
