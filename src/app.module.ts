import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/demo', {
    retryAttempts: 5,
    retryDelay: 20
  }), PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
