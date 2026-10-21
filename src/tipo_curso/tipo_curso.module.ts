import { Module } from '@nestjs/common';
import { TipoCursoService } from './tipo_curso.service.js';
import { TipoCursoController } from './tipo_curso.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [PrismaService],
  controllers: [TipoCursoController],
  providers: [TipoCursoService],
})
export class TipoCursoModule {}
