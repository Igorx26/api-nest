import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto.js';
import { UpdateCursoDto } from './dto/update-curso.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CursoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCursoDto: CreateCursoDto) {
    const { id_instituicao, id_tipo_curso, tx_descricao } = createCursoDto;

    const cursoExistente = await this.prisma.curso.findUnique({
      where: {
        id_instituicao_id_tipo_curso_tx_descricao: {
          id_instituicao,
          id_tipo_curso,
          tx_descricao,
        },
      },
    });

    if (cursoExistente) {
      throw new ConflictException(
        `Este curso já está cadastrado nesta instituição.`,
      );
    }

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
    const cursoAtual = await this.findOne(id);

    const id_instituicao =
      updateCursoDto.id_instituicao ?? cursoAtual.id_instituicao;
    const id_tipo_curso =
      updateCursoDto.id_tipo_curso ?? cursoAtual.id_tipo_curso;
    const tx_descricao = updateCursoDto.tx_descricao ?? cursoAtual.tx_descricao;

    const cursoExistente = await this.prisma.curso.findUnique({
      where: {
        id_instituicao_id_tipo_curso_tx_descricao: {
          id_instituicao,
          id_tipo_curso,
          tx_descricao,
        },
      },
    });

    if (cursoExistente && cursoExistente.id_curso !== id) {
      throw new ConflictException(
        `Este curso já está cadastrado nesta instituição.`,
      );
    }

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
