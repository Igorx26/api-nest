import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTipoDisciplinaDto } from './dto/create-tipo_disciplina.dto.js';
import { UpdateTipoDisciplinaDto } from './dto/update-tipo_disciplina.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TipoDisciplinaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTipoDisciplinaDto: CreateTipoDisciplinaDto) {
    const tipoDisciplinaExistente =
      await this.prisma.tipo_disciplina.findUnique({
        where: { tx_descricao: createTipoDisciplinaDto.tx_descricao },
      });

    if (tipoDisciplinaExistente) {
      throw new ConflictException(
        `Tipo de Disciplina com a descrição "${createTipoDisciplinaDto.tx_descricao}" já existe.`,
      );
    }

    return this.prisma.tipo_disciplina.create({
      data: createTipoDisciplinaDto,
    });
  }

  findAll() {
    return this.prisma.tipo_disciplina.findMany();
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
    const { tx_descricao } = updateTipoDisciplinaDto;

    if (tx_descricao) {
      const tipoDisciplinaExistente =
        await this.prisma.tipo_disciplina.findUnique({
          where: { tx_descricao: updateTipoDisciplinaDto.tx_descricao },
        });

      if (
        tipoDisciplinaExistente &&
        tipoDisciplinaExistente.id_tipo_disciplina !== id
      ) {
        throw new ConflictException(
          `Tipo de Disciplina com a descrição "${updateTipoDisciplinaDto.tx_descricao}" já existe.`,
        );
      }
    }

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
