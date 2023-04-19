import { Injectable } from "@nestjs/common";
import { PersonRepository } from "./person.repository";
import { Person } from "./schemas/person.schema";
import {v4 as uuid} from 'uuid';
import { UpdatePersonDto } from "./dto/update-person.dto";


@Injectable()
export class PersonService {
    constructor(private readonly repository: PersonRepository) {}

    async getPersonById(personId: string): Promise<Person> {
        return this.repository.findOne({ _id: personId });
    }

    async getAll(): Promise<Person[]> {
        return this.repository.find({});
    }

    async createPerson(firstName: string, lastName: string, age: number, email: string): Promise<Person> {
        return this.repository.create({
            firstName,
            lastName, 
            email,
            age,
            favouriteBooks: [],
            favouriteFoods: []
        })
    }

    async updatePerson(personId: string, dto: UpdatePersonDto): Promise<Person> {
        return this.repository.findOneAndUpdate({_id: personId}, dto);
    }

}