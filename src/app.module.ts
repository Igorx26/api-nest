import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { InstituicaoModule } from './instituicao/instituicao.module.js';
import { CursoModule } from './curso/curso.module.js';
import { AlunoModule } from './aluno/aluno.module.js';
import { CursaModule } from './cursa/cursa.module.js';

@Module({
  imports: [PrismaModule, InstituicaoModule, CursoModule, AlunoModule, CursaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
