import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDisciplinaDto } from './create-tipo_disciplina.dto.js';

export class UpdateTipoDisciplinaDto extends PartialType(CreateTipoDisciplinaDto) {}
