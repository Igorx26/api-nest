import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto.js';
import { UpdateProfessorDto } from './dto/update-professor.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfessorService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfessorDto: CreateProfessorDto) {
    return this.prisma.professor.create({
      data: createProfessorDto,
    });
  }

  findAll() {
    return this.prisma.professor.findMany({
      include: {
        titulo: true,
      },
    });
  }

  async findOne(id: number) {
    const professor = await this.prisma.professor.findUnique({
      where: { id_professor: id },
      include: {
        leciona: true,
        titulo: true,
      },
    });

    if (!professor) {
      throw new NotFoundException(`Professor com o ID ${id} não encontrado.`);
    }

    return professor;
  }

  async update(id: number, updateProfessorDto: UpdateProfessorDto) {
    await this.findOne(id);

    return this.prisma.professor.update({
      where: { id_professor: id },
      data: updateProfessorDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.professor.delete({
      where: { id_professor: id },
    });
  }
}
