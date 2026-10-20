import { Module } from '@nestjs/common';
import { CursaService } from './cursa.service.js';
import { CursaController } from './cursa.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [CursaController],
  providers: [CursaService],
})
export class CursaModule {}
