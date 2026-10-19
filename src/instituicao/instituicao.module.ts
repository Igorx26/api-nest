import { Module } from '@nestjs/common';
import { InstituicaoService } from './instituicao.service.js';
import { InstituicaoController } from './instituicao.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [InstituicaoController],
  providers: [InstituicaoService],
})
export class InstituicaoModule {}
