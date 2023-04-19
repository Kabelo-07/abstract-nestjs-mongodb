import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { AbstractRepository } from "src/database/abstract.repository";
import { Person, PersonDocument } from "./schemas/person.schema";

@Injectable()
export class PersonRepository extends AbstractRepository<PersonDocument> {

    constructor(@InjectModel(Person.name) personModel: Model<PersonDocument>) {
        super(personModel);
    }

}