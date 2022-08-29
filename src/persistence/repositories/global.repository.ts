import { CreateAssignmentEntity } from './../entities/panels/create-assignment.entity';
import { ObjectId, WithId } from 'mongodb';
import { BaseEntity } from '../entities/base.entity';
import { ConnectionService } from '../connection.service';

export class GlobalRepository {
  private static readonly COLLECTION = 'global';

  async get(objectId: ObjectId | string): Promise<BaseEntity> {
    const database = await ConnectionService.get();
    return (await database
      .collection<BaseEntity>(GlobalRepository.COLLECTION)
      .findOne({ _id: new ObjectId(objectId) })) as BaseEntity;
  }

  async getByName(name: string): Promise<BaseEntity> {
    const database = await ConnectionService.get();
    return (await database
      .collection<BaseEntity>(GlobalRepository.COLLECTION)
      .findOne({ name })) as BaseEntity;
  }

  async insertPanel(entity: CreateAssignmentEntity): Promise<BaseEntity> {
    const database = await ConnectionService.get();
    const date = new Date().getTime() / 1000;
    const insertEntity = {
      ...entity,
      ...{
        createdAt: date,
        updatedAt: date,
      },
    };
    const result = await database
      .collection(GlobalRepository.COLLECTION)
      .insertOne(insertEntity);
    return {
      ...insertEntity,
      _id: result.insertedId,
    };
  }

  async insert(entity: BaseEntity): Promise<BaseEntity> {
    const database = await ConnectionService.get();
    const date = new Date().getTime() / 1000;
    const insertEntity = {
      ...entity,
      ...{
        createdAt: date,
        updatedAt: date,
      },
    };
    const result = await database
      .collection(GlobalRepository.COLLECTION)
      .insertOne(insertEntity);
    return {
      ...insertEntity,
      _id: result.insertedId,
    };
  }

  async updatePanel(
    entity: CreateAssignmentEntity
  ): Promise<CreateAssignmentEntity> {
    const database = await ConnectionService.get();
    const updatedEntity = {
      ...entity,
      ...{
        updatedAt: new Date().getTime() / 1000,
      },
    };
    const result = await database
      .collection<CreateAssignmentEntity>(GlobalRepository.COLLECTION)
      .updateOne({ _id: entity._id }, { $set: updatedEntity });
    return {
      ...updatedEntity,
      _id: result.upsertedId,
    };
  }

  async update<T>(entity: WithId<T>): Promise<BaseEntity> {
    const database = await ConnectionService.get();
    const updatedEntity = {
      ...entity,
      ...{
        updatedAt: new Date().getTime() / 1000,
      },
    };
    const result = await database
      .collection<BaseEntity>(GlobalRepository.COLLECTION)
      .updateOne({ _id: entity._id }, { $set: updatedEntity });
    return {
      ...updatedEntity,
      _id: result.upsertedId,
    };
  }
}
