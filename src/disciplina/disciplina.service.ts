import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto.js';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DisciplinaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDisciplinaDto: CreateDisciplinaDto) {
    const { tx_sigla, tx_descricao } = createDisciplinaDto;

    const siglaExistente = await this.prisma.disciplina.findUnique({
      where: { tx_sigla },
    });
    if (siglaExistente) {
      throw new ConflictException(
        `Já existe uma disciplina com a sigla ${tx_sigla} cadastrada.`,
      );
    }

    const descricaoExistente = await this.prisma.disciplina.findUnique({
      where: { tx_descricao },
    });
    if (descricaoExistente) {
      throw new ConflictException(
        `Já existe uma disciplina com a descrição ${tx_descricao} cadastrada.`,
      );
    }

    return this.prisma.disciplina.create({ data: createDisciplinaDto });
  }

  findAll() {
    return this.prisma.disciplina.findMany({
      include: {
        curso: true,
        tipo_disciplina: true,
      },
    });
  }

  async findOne(id: number) {
    const disciplina = await this.prisma.disciplina.findUnique({
      where: { id_disciplina: id },
      include: {
        curso: true,
        tipo_disciplina: true,
      },
    });

    if (!disciplina) {
      throw new NotFoundException(`Disciplina com o ID ${id} não encontrada.`);
    }

    return disciplina;
  }

  async update(id: number, updateDisciplinaDto: UpdateDisciplinaDto) {
    await this.findOne(id);
    const { tx_sigla, tx_descricao } = updateDisciplinaDto;

    if (tx_sigla) {
      const siglaExistente = await this.prisma.disciplina.findUnique({
        where: { tx_sigla },
      });
      if (siglaExistente && siglaExistente.id_disciplina !== id) {
        throw new ConflictException(
          `Já existe uma disciplina com a sigla ${tx_sigla} cadastrada.`,
        );
      }
    }

    if (tx_descricao) {
      const descricaoExistente = await this.prisma.disciplina.findUnique({
        where: { tx_descricao },
      });
      if (descricaoExistente && descricaoExistente.id_disciplina !== id) {
        throw new ConflictException(
          `Já existe uma disciplina com a descrição ${tx_descricao} cadastrada.`,
        );
      }
    }

    return this.prisma.disciplina.update({
      where: { id_disciplina: id },
      data: updateDisciplinaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.disciplina.delete({
      where: {
        id_disciplina: id,
      },
    });
  }
}
