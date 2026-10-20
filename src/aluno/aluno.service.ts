import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AlunoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAlunoDto: CreateAlunoDto) {
    return this.prisma.aluno.create({
      data: {
        ...createAlunoDto,
        dt_nascimento: new Date(createAlunoDto.dt_nascimento),
      },
    });
  }

  findAll() {
    return this.prisma.aluno.findMany({
      include: { cursa: true },
    });
  }

  async findOne(id: number) {
    const aluno = await this.prisma.aluno.findUnique({
      where: { id_aluno: id },
      include: { cursa: true },
    });

    if (!aluno) {
      throw new NotFoundException(`Aluno com o ID ${id} não encontrado.`);
    }

    return aluno;
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    await this.findOne(id);

    const { dt_nascimento, ...rest } = updateAlunoDto;

    return this.prisma.aluno.update({
      where: { id_aluno: id },
      data: {
        ...rest,
        ...(dt_nascimento && new Date(dt_nascimento)),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.aluno.delete({
      where: { id_aluno: id },
    });
  }
}
