import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoCursoDto } from './create-tipo_curso.dto.js';

export class UpdateTipoCursoDto extends PartialType(CreateTipoCursoDto) {}
