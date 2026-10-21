import { Module } from '@nestjs/common';
import { TipoDisciplinaService } from './tipo_disciplina.service.js';
import { TipoDisciplinaController } from './tipo_disciplina.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [TipoDisciplinaController],
  providers: [TipoDisciplinaService],
})
export class TipoDisciplinaModule {}
