import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service.js';
import { ProfessorController } from './professor.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}
