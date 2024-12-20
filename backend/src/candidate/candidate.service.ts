import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './candidate.entity';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private candidateRepository: Repository<Candidate>,
  ) {}

  findAll(): Promise<Candidate[]> {
    return this.candidateRepository.find();
  }

  findOne(id: number): Promise<Candidate> {
    return this.candidateRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.candidateRepository.delete(id);
  }
}
