import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CursaService } from './cursa.service.js';
import { CreateCursaDto } from './dto/create-cursa.dto.js';
import { UpdateCursaDto } from './dto/update-cursa.dto.js';

@Controller('cursa')
export class CursaController {
  constructor(private readonly cursaService: CursaService) {}

  @Post()
  create(@Body() createCursaDto: CreateCursaDto) {
    return this.cursaService.create(createCursaDto);
  }

  @Get()
  findAll() {
    return this.cursaService.findAll();
  }

  @Get(':id_aluno/:id_disciplina/:in_ano/:in_semestre')
  findOne(
    @Param('id_aluno') id_aluno: string,
    @Param('id_disciplina') id_disciplina: string,
    @Param('in_ano') in_ano: string,
    @Param('in_semestre') in_semestre: string,
  ) {
    return this.cursaService.findOne(
      +id_aluno,
      +id_disciplina,
      +in_ano,
      +in_semestre,
    );
  }

  @Patch(':id_aluno/:id_disciplina/:in_ano/:in_semestre')
  update(
    @Param('id_aluno') id_aluno: string,
    @Param('id_disciplina') id_disciplina: string,
    @Param('in_ano') in_ano: string,
    @Param('in_semestre') in_semestre: string,
    @Body() updateCursaDto: UpdateCursaDto,
  ) {
    return this.cursaService.update(
      +id_aluno,
      +id_disciplina,
      +in_ano,
      +in_semestre,
      updateCursaDto,
    );
  }

  @Delete(':id_aluno/:id_disciplina/:in_ano/:in_semestre')
  remove(
    @Param('id_aluno') id_aluno: string,
    @Param('id_disciplina') id_disciplina: string,
    @Param('in_ano') in_ano: string,
    @Param('in_semestre') in_semestre: string,
  ) {
    return this.cursaService.remove(
      +id_aluno,
      +id_disciplina,
      +in_ano,
      +in_semestre,
    );
  }
}
