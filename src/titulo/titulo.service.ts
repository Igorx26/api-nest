import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTituloDto } from './dto/create-titulo.dto.js';
import { UpdateTituloDto } from './dto/update-titulo.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TituloService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTituloDto: CreateTituloDto) {
    return this.prisma.titulo.create({
      data: createTituloDto,
    });
  }

  findAll() {
    return this.prisma.titulo.findMany({
      include: { professor: true },
    });
  }

  async findOne(id: number) {
    const tipoTitulo = await this.prisma.titulo.findUnique({
      where: { id_titulo: id },
      include: { professor: true },
    });

    if (!tipoTitulo) {
      throw new NotFoundException(`Título com o ID ${id} não encontrado.`);
    }
    return tipoTitulo;
  }

  async update(id: number, updateTituloDto: UpdateTituloDto) {
    await this.findOne(id);

    return this.prisma.titulo.update({
      where: { id_titulo: id },
      data: updateTituloDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.titulo.delete({
      where: { id_titulo: id },
    });
  }
}
