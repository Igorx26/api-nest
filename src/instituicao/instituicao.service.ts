import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto.js';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class InstituicaoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createInstituicaoDto: CreateInstituicaoDto) {
    return this.prisma.instituicao.create({
      data: createInstituicaoDto,
    });
  }

  findAll() {
    return this.prisma.instituicao.findMany();
  }

  async findOne(id: number) {
    const instituicao = await this.prisma.instituicao.findUnique({
      where: { id_instituicao: id },
    });

    if (!instituicao) {
      throw new NotFoundException(`Instituição com o ID ${id} não encontrada.`);
    }

    return instituicao;
  }

  async update(id: number, updateInstituicaoDto: UpdateInstituicaoDto) {
    await this.findOne(id);

    return this.prisma.instituicao.update({
      where: { id_instituicao: id },
      data: updateInstituicaoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.instituicao.delete({
      where: { id_instituicao: id },
    });
  }
}
