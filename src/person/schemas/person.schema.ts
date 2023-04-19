import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PersonDocument = Person & Document;

@Schema()
export class Person {

    @Prop()
    firstName: String;

    @Prop()
    lastName: String;

    @Prop()
    email: String;

    @Prop()
    age: Number

    @Prop([String])
    favouriteFoods: String[]    

    @Prop([String])
    favouriteBooks: String[]    

}

export const PersonSchema = SchemaFactory.createForClass(Person);