import { Module } from '@nestjs/common';
import { LecionaService } from './leciona.service.js';
import { LecionaController } from './leciona.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [PrismaService],
  controllers: [LecionaController],
  providers: [LecionaService],
})
export class LecionaModule {}
