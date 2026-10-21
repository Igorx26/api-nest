import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LecionaService } from './leciona.service.js';
import { CreateLecionaDto } from './dto/create-leciona.dto.js';
import { UpdateLecionaDto } from './dto/update-leciona.dto.js';

@Controller('leciona')
export class LecionaController {
  constructor(private readonly lecionaService: LecionaService) {}

  @Post()
  create(@Body() createLecionaDto: CreateLecionaDto) {
    return this.lecionaService.create(createLecionaDto);
  }

  @Get()
  findAll() {
    return this.lecionaService.findAll();
  }

  @Get(':id_professor/:id_disciplina')
  findOne(
    @Param('id_professor') id_professor: string,
    @Param('id_disciplina') id_disciplina: string,
  ) {
    return this.lecionaService.findOne(+id_professor, +id_disciplina);
  }

  // @Patch(':id_professor/:id_disciplina')
  // update(
  //   @Param('id_professor') id_professor: string,
  //   @Param('id_disciplina') id_disciplina: string,
  //   @Body() updateLecionaDto: UpdateLecionaDto,
  // ) {
  //   return this.lecionaService.update(
  //     +id_professor,
  //     +id_disciplina,
  //     updateLecionaDto,
  //   );
  // }

  @Delete(':id_professor/:id_disciplina')
  remove(
    @Param('id_professor') id_professor: string,
    @Param('id_disciplina') id_disciplina: string,
  ) {
    return this.lecionaService.remove(+id_professor, +id_disciplina);
  }
}
