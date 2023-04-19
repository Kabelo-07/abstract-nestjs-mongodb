import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { PersonService } from "./person.service";
import { Person } from "./schemas/person.schema";


@Controller('persons')
export class PersonController {
    constructor(private readonly personService: PersonService) {}

    @Get(':personId')
    async getPerson(@Param('personId') personId: string): Promise<Person> {
        return this.personService.getPersonById(personId);
    }

    @Get()
    async fetchAll(): Promise<Person[]> {
        return this.personService.getAll();
    }

    @Post()
    async createPerson(@Body() dto: CreatePersonDto): Promise<Person> {
        return this.personService.createPerson(
            dto.firstName,
            dto.lastName,
            dto.age,
            dto.email
        );
    }

    @Patch(':personId')
    async updatePerson(@Param('personId') personId: string, @Body() dto: UpdatePersonDto): Promise<Person> {
        return this.personService.updatePerson(personId, dto);
    }

}