import { Module } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service.js';
import { DisciplinaController } from './disciplina.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [PrismaService],
  controllers: [DisciplinaController],
  providers: [DisciplinaService],
})
export class DisciplinaModule {}
