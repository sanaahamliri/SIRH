import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { Candidate } from './candidate.entity';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  findAll(): Promise<Candidate[]> {
    return this.candidateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Candidate> {
    return this.candidateService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.candidateService.remove(id);
  }
}
