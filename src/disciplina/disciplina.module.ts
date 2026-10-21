import { Module } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service.js';
import { DisciplinaController } from './disciplina.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [DisciplinaController],
  providers: [DisciplinaService],
})
export class DisciplinaModule {}
