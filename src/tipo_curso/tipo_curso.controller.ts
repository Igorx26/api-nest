import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoCursoService } from './tipo_curso.service.js';
import { CreateTipoCursoDto } from './dto/create-tipo_curso.dto.js';
import { UpdateTipoCursoDto } from './dto/update-tipo_curso.dto.js';

@Controller('tipo-curso')
export class TipoCursoController {
  constructor(private readonly tipoCursoService: TipoCursoService) {}

  @Post()
  create(@Body() createTipoCursoDto: CreateTipoCursoDto) {
    return this.tipoCursoService.create(createTipoCursoDto);
  }

  @Get()
  findAll() {
    return this.tipoCursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoCursoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoCursoDto: UpdateTipoCursoDto) {
    return this.tipoCursoService.update(+id, updateTipoCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoCursoService.remove(+id);
  }
}
