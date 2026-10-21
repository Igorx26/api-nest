import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { InstituicaoModule } from './instituicao/instituicao.module.js';
import { CursoModule } from './curso/curso.module.js';
import { AlunoModule } from './aluno/aluno.module.js';
import { CursaModule } from './cursa/cursa.module.js';
import { DisciplinaModule } from './disciplina/disciplina.module.js';
import { LecionaModule } from './leciona/leciona.module.js';
import { ProfessorModule } from './professor/professor.module.js';

@Module({
  imports: [PrismaModule, InstituicaoModule, CursoModule, AlunoModule, CursaModule, DisciplinaModule, LecionaModule, ProfessorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
