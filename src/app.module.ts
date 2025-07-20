import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ayshaareej71:mwdBlWTjOdawpuJ5@cluster0.ocmps1a.mongodb.net/'),
    UsersModule,
  ],
})
export class AppModule {}
