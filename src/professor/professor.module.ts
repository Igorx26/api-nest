import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service.js';
import { ProfessorController } from './professor.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [PrismaService],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}
