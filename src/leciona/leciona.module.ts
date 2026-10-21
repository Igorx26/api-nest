import { Module } from '@nestjs/common';
import { LecionaService } from './leciona.service.js';
import { LecionaController } from './leciona.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [LecionaController],
  providers: [LecionaService],
})
export class LecionaModule {}
