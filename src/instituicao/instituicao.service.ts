import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto.js';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class InstituicaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInstituicaoDto: CreateInstituicaoDto) {
    const { tx_sigla, tx_descricao } = createInstituicaoDto;

    const siglaExistente = await this.prisma.instituicao.findUnique({
      where: { tx_sigla },
    });
    if (siglaExistente) {
      throw new ConflictException(
        `Já existe uma Instituição com a sigla ${tx_sigla} cadastrada.`,
      );
    }

    const descricaoExistente = await this.prisma.instituicao.findUnique({
      where: { tx_descricao },
    });
    if (descricaoExistente) {
      throw new ConflictException(
        `Já existe uma Instituição com a descrição ${tx_descricao} cadastrada.`,
      );
    }

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
      include: { curso: true },
    });

    if (!instituicao) {
      throw new NotFoundException(`Instituição com o ID ${id} não encontrada.`);
    }

    return instituicao;
  }

  async update(id: number, updateInstituicaoDto: UpdateInstituicaoDto) {
    await this.findOne(id);
    const { tx_sigla, tx_descricao } = updateInstituicaoDto;

    if (tx_sigla) {
      const siglaExistente = await this.prisma.instituicao.findUnique({
        where: { tx_sigla },
      });
      if (siglaExistente && siglaExistente.id_instituicao !== id) {
        throw new ConflictException(
          `Já existe uma Instituição com a sigla ${tx_sigla} cadastrada.`,
        );
      }
    }

    if (tx_descricao) {
      const descricaoExistente = await this.prisma.instituicao.findUnique({
        where: { tx_descricao },
      });
      if (descricaoExistente && descricaoExistente.id_instituicao !== id) {
        throw new ConflictException(
          `Já existe uma Instituição com a descrição ${tx_descricao} cadastrada.`,
        );
      }
    }

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
