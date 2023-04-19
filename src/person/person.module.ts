import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PersonController } from "./person.controller";
import { PersonRepository } from "./person.repository";
import { PersonService } from "./person.service";
import { Person, PersonSchema } from "./schemas/person.schema";

@Module({
    imports: [MongooseModule.forFeature([
        {name: Person.name, schema: PersonSchema}
    ])],
    controllers: [PersonController],
    providers: [PersonRepository, PersonService]
})

export class PersonModule {}