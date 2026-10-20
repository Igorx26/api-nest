import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { InstituicaoModule } from './instituicao/instituicao.module.js';
import { CursoModule } from './curso/curso.module.js';
import { AlunoModule } from './aluno/aluno.module.js';

@Module({
  imports: [PrismaModule, InstituicaoModule, CursoModule, AlunoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
