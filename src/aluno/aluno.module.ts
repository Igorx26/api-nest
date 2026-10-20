import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service.js';
import { AlunoController } from './aluno.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule {}
