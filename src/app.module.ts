import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { InstituicaoModule } from './instituicao/instituicao.module.js';

@Module({
  imports: [PrismaModule, InstituicaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
