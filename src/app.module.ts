import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { Products–noSpecModule } from './products–no-spec/products–no-spec.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CommonModule,
    Products–noSpecModule,
  ],
})
export class AppModule {}
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Product{
  @PrimaryGeneratedColumn('uuid')
    id: string;

   @column('text', {
    unique:true,
   })

}