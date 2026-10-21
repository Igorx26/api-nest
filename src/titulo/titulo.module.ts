import { Module } from '@nestjs/common';
import { TituloService } from './titulo.service.js';
import { TituloController } from './titulo.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [PrismaService],
  controllers: [TituloController],
  providers: [TituloService],
})
export class TituloModule {}
