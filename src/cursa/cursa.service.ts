import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursaDto } from './dto/create-cursa.dto.js';
import { UpdateCursaDto } from './dto/update-cursa.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CursaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCursaDto: CreateCursaDto) {
    return this.prisma.cursa.create({
      data: createCursaDto,
    });
  }

  findAll() {
    return this.prisma.cursa.findMany({
      include: {
        aluno: true,
        disciplina: true,
      },
    });
  }

  async findOne(
    id_aluno: number,
    id_disciplina: number,
    in_ano: number,
    in_semestre: number,
  ) {
    const cursa = await this.prisma.cursa.findUnique({
      where: {
        id_aluno_id_disciplina_in_ano_in_semestre: {
          id_aluno,
          id_disciplina,
          in_ano,
          in_semestre,
        },
      },
      include: {
        aluno: true,
        disciplina: true,
      },
    });

    if (!cursa) {
      throw new NotFoundException(
        `Matrícula não encontrada para o Aluno ${id_aluno} na Disciplina ${id_disciplina} (${in_ano}.${in_semestre}).`,
      );
    }

    return cursa;
  }

  async update(
    id_aluno: number,
    id_disciplina: number,
    in_ano: number,
    in_semestre: number,
    updateCursaDto: UpdateCursaDto,
  ) {
    await this.findOne(id_aluno, id_disciplina, in_ano, in_semestre);

    return this.prisma.cursa.update({
      where: {
        id_aluno_id_disciplina_in_ano_in_semestre: {
          id_aluno,
          id_disciplina,
          in_ano,
          in_semestre,
        },
      },
      data: updateCursaDto,
    });
  }

  async remove(
    id_aluno: number,
    id_disciplina: number,
    in_ano: number,
    in_semestre: number,
  ) {
    await this.findOne(id_aluno, id_disciplina, in_ano, in_semestre);

    return this.prisma.cursa.delete({
      where: {
        id_aluno_id_disciplina_in_ano_in_semestre: {
          id_aluno,
          id_disciplina,
          in_ano,
          in_semestre,
        },
      },
    });
  }
}
