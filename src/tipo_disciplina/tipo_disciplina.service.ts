import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoDisciplinaDto } from './dto/create-tipo_disciplina.dto.js';
import { UpdateTipoDisciplinaDto } from './dto/update-tipo_disciplina.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TipoDisciplinaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTipoDisciplinaDto: CreateTipoDisciplinaDto) {
    return this.prisma.tipo_disciplina.create({
      data: createTipoDisciplinaDto,
    });
  }

  findAll() {
    return this.prisma.tipo_disciplina.findMany({
      include: { disciplina: true },
    });
  }

  async findOne(id: number) {
    const tipoDisciplina = await this.prisma.tipo_disciplina.findUnique({
      where: { id_tipo_disciplina: id },
      include: { disciplina: true },
    });

    if (!tipoDisciplina) {
      throw new NotFoundException(
        `Tipo de Disciplina com o ID ${id} não encontrado.`,
      );
    }
    return tipoDisciplina;
  }

  async update(id: number, updateTipoDisciplinaDto: UpdateTipoDisciplinaDto) {
    await this.findOne(id);

    return this.prisma.tipo_disciplina.update({
      where: { id_tipo_disciplina: id },
      data: updateTipoDisciplinaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.tipo_disciplina.delete({
      where: { id_tipo_disciplina: id },
    });
  }
}
