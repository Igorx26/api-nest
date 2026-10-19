import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto.js';
import { UpdateCursoDto } from './dto/update-curso.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CursoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCursoDto: CreateCursoDto) {
    return this.prisma.curso.create({ data: createCursoDto });
  }

  findAll() {
    return this.prisma.curso.findMany({
      include: {
        instituicao: true,
        tipo_curso: true,
      },
    });
  }

  async findOne(id: number) {
    const curso = await this.prisma.curso.findUnique({
      where: { id_curso: id },
      include: {
        instituicao: true,
        tipo_curso: true,
      },
    });

    if (!curso) {
      throw new NotFoundException(`Curso com o ID ${id} não encontrado.`);
    }

    return curso;
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    await this.findOne(id);

    return this.prisma.curso.update({
      where: { id_curso: id },
      data: updateCursoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.curso.delete({
      where: { id_curso: id },
    });
  }
}
