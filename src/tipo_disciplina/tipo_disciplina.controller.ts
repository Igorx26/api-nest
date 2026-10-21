import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDisciplinaService } from './tipo_disciplina.service.js';
import { CreateTipoDisciplinaDto } from './dto/create-tipo_disciplina.dto.js';
import { UpdateTipoDisciplinaDto } from './dto/update-tipo_disciplina.dto.js';

@Controller('tipo-disciplina')
export class TipoDisciplinaController {
  constructor(private readonly tipoDisciplinaService: TipoDisciplinaService) {}

  @Post()
  create(@Body() createTipoDisciplinaDto: CreateTipoDisciplinaDto) {
    return this.tipoDisciplinaService.create(createTipoDisciplinaDto);
  }

  @Get()
  findAll() {
    return this.tipoDisciplinaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDisciplinaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoDisciplinaDto: UpdateTipoDisciplinaDto) {
    return this.tipoDisciplinaService.update(+id, updateTipoDisciplinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDisciplinaService.remove(+id);
  }
}
