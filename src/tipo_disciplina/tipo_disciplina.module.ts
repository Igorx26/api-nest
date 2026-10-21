import { Module } from '@nestjs/common';
import { TipoDisciplinaService } from './tipo_disciplina.service.js';
import { TipoDisciplinaController } from './tipo_disciplina.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [PrismaService],
  controllers: [TipoDisciplinaController],
  providers: [TipoDisciplinaService],
})
export class TipoDisciplinaModule {}
