import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  appliedPosition: string;

  @Column()
  resume: string;
}
