import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLecionaDto } from './dto/create-leciona.dto.js';
import { UpdateLecionaDto } from './dto/update-leciona.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class LecionaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createLecionaDto: CreateLecionaDto) {
    return this.prisma.leciona.create({ data: createLecionaDto });
  }

  findAll() {
    return this.prisma.leciona.findMany({
      include: {
        professor: true,
        disciplina: true,
      },
    });
  }

  async findOne(id_professor: number, id_disciplina: number) {
    const leciona = await this.prisma.leciona.findUnique({
      where: {
        id_professor_id_disciplina: {
          id_professor,
          id_disciplina,
        },
      },
      include: {
        professor: true,
        disciplina: true,
      },
    });

    if (!leciona) {
      throw new NotFoundException(
        `Leciona não encontrada para o Professor ${id_professor} na Disciplina ${id_disciplina}.`,
      );
    }

    return leciona;
  }

  async update(
    id_professor: number,
    id_disciplina: number,
    updateLecionaDto: UpdateLecionaDto,
  ) {
    await this.findOne(id_professor, id_disciplina);

    return this.prisma.leciona.update({
      where: {
        id_professor_id_disciplina: {
          id_professor,
          id_disciplina,
        },
      },
      data: updateLecionaDto,
    });
  }

  async remove(id_professor: number, id_disciplina: number) {
    await this.findOne(id_professor, id_disciplina);

    return this.prisma.leciona.delete({
      where: {
        id_professor_id_disciplina: {
          id_professor,
          id_disciplina,
        },
      },
    });
  }
}
