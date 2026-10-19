import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { InstituicaoModule } from './instituicao/instituicao.module.js';
import { CursoModule } from './curso/curso.module.js';

@Module({
  imports: [PrismaModule, InstituicaoModule, CursoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
