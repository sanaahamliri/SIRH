import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { Employee } from './employee.entity';

@Injectable()
export class CsvImportService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async importCsv(filePath: string): Promise<void> {
    const employees: Employee[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const employee = new Employee();
        employee.name = row.name;
        employee.position = row.position;
        employee.department = row.department;
        employee.dateOfJoining = new Date(row.dateOfJoining);
        employee.salary = +row.salary;
        employees.push(employee);
      })
      .on('end', async () => {
        await this.employeeRepository.save(employees);
        console.log('CSV file successfully processed and data saved to the database');
      });
  }
}
