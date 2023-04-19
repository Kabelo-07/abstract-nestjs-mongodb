import { Document, FilterQuery, Model, UpdateQuery } from "mongoose";

export abstract class AbstractRepository<T extends Document> {
    constructor(protected readonly model: Model<T>) {}

    async findOne(filterQuery: FilterQuery<T>, projection?: Record<string, unknown> ): Promise<T | null> {
        return this.model.findOne(filterQuery, {
            _v: 0,
            ...projection
        }).exec();
    }

    async find(filterQuery: FilterQuery<T>): Promise<T[] | null> {
        return this.model.find(filterQuery);
    }

    async create(data: unknown): Promise<T> {
        const entity = new this.model(data);
        return entity.save();
    }

    async findOneAndUpdate(filterQuery: FilterQuery<T>, data: UpdateQuery<unknown>): Promise<T | null> {
        return this.model.findOneAndUpdate(filterQuery, data, {new: true});
    }

    async delete(filterQuery: FilterQuery<T>): Promise<boolean> {
        const result = this.model.deleteMany(filterQuery);
        return (await result).deletedCount > 0;
    }

}