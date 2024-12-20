import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id } });
  }

  create(employee: Employee): Promise<Employee> {
    return this.employeeRepository.save(employee);
  }

  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
