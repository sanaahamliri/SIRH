import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { Candidate } from './candidate.entity';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiBody, 
  ApiParam 
} from '@nestjs/swagger';

@ApiTags('candidates')
@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  @ApiOperation({ summary: 'Get all candidates' })
  @ApiResponse({ status: 200, description: 'Return all candidates.' })
  findAll(): Promise<Candidate[]> {
    return this.candidateService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a candidate by ID' })
  @ApiResponse({ status: 200, description: 'Return a candidate.' })
  @ApiResponse({ status: 404, description: 'Candidate not found.' })
  @ApiParam({ name: 'id', type: 'number', example: 1 })
  findOne(@Param('id') id: number): Promise<Candidate> {
    return this.candidateService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a candidate' })
  @ApiResponse({ status: 200, description: 'The candidate has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Candidate not found.' })
  @ApiParam({ name: 'id', type: 'number', example: 1 })
  remove(@Param('id') id: number): Promise<void> {
    return this.candidateService.remove(id);
  }
}
