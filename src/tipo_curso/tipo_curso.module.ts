import { Module } from '@nestjs/common';
import { TipoCursoService } from './tipo_curso.service.js';
import { TipoCursoController } from './tipo_curso.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [TipoCursoController],
  providers: [TipoCursoService],
})
export class TipoCursoModule {}
