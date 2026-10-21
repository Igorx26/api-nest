import { Module } from '@nestjs/common';
import { TituloService } from './titulo.service.js';
import { TituloController } from './titulo.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [TituloController],
  providers: [TituloService],
})
export class TituloModule {}
