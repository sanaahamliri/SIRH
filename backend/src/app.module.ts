import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Employee } from './employee/employee.entity';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';
import { Candidate } from './candidate/candidate.entity';
import { CandidateService } from './candidate/candidate.service';
import { CandidateController } from './candidate/candidate.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Employee, Candidate],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Employee, Candidate]),
  ],
  controllers: [EmployeeController, CandidateController],
  providers: [EmployeeService, CandidateService],
})
export class AppModule {}
