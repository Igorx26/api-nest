import { OmitType } from '@nestjs/mapped-types';
import { CreateCursaDto } from './create-cursa.dto.js';

export class UpdateCursaDto extends OmitType(CreateCursaDto, [
  'id_aluno',
  'id_disciplina',
  'in_ano',
  'in_semestre',
] as const) {}
