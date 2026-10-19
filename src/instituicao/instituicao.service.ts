import { Injectable } from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto.js';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class InstituicaoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createInstituicaoDto: CreateInstituicaoDto) {
    return this.prisma.instituicao.create({ data: createInstituicaoDto });
  }

  findAll() {
    return `This action returns all instituicao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instituicao`;
  }

  update(id: number, updateInstituicaoDto: UpdateInstituicaoDto) {
    return `This action updates a #${id} instituicao`;
  }

  remove(id: number) {
    return `This action removes a #${id} instituicao`;
  }
}
