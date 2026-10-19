import { Module } from '@nestjs/common';
import { CursoService } from './curso.service.js';
import { CursoController } from './curso.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
