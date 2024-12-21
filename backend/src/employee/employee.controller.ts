import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiBody, 
  ApiParam 
} from '@nestjs/swagger';

@ApiTags('employees')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all employees' })
  @ApiResponse({ status: 200, description: 'Return all employees.' })
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an employee by ID' })
  @ApiResponse({ status: 200, description: 'Return an employee.' })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  @ApiParam({ name: 'id', type: 'number', example: 1 })
  findOne(@Param('id') id: number): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  @ApiResponse({ 
    status: 201,
    description: 'The employee has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'John Doe' },
        position: { type: 'string', example: 'Developer' },
        department: { type: 'string', example: 'IT' },
        dateOfJoining: { type: 'string', example: '2022-01-01' },
        salary: { type: 'number', example: 50000 }
      }
    }
  })
  create(@Body() employee: Employee): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an employee' })
  @ApiResponse({
     status: 200, description: 'The employee has been successfully deleted.'
     })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  @ApiParam({ name: 'id', type: 'number', example: 1 })
  remove(@Param('id') id: number): Promise<void> {
    return this.employeeService.remove(id);
  }
}
