import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Post()
  create(@Body() employee: Employee): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.employeeService.remove(id);
  }
}
