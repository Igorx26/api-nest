import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoCursoDto } from './dto/create-tipo_curso.dto.js';
import { UpdateTipoCursoDto } from './dto/update-tipo_curso.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TipoCursoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTipoCursoDto: CreateTipoCursoDto) {
    return this.prisma.tipo_curso.create({ data: createTipoCursoDto });
  }

  findAll() {
    return this.prisma.tipo_curso.findMany({
      include: { curso: true },
    });
  }

  async findOne(id: number) {
    const tipoCurso = await this.prisma.tipo_curso.findUnique({
      where: { id_tipo_curso: id },
      include: { curso: true },
    });

    if (!tipoCurso) {
      throw new NotFoundException(
        `Tipo de Curso com o ID ${id} não encontrado.`,
      );
    }
    return tipoCurso;
  }

  async update(id: number, updateTipoCursoDto: UpdateTipoCursoDto) {
    await this.findOne(id);

    return this.prisma.tipo_curso.update({
      where: { id_tipo_curso: id },
      data: updateTipoCursoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.tipo_curso.delete({
      where: { id_tipo_curso: id },
    });
  }
}
