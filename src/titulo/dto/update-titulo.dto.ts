import { PartialType } from '@nestjs/mapped-types';
import { CreateTituloDto } from './create-titulo.dto.js';

export class UpdateTituloDto extends PartialType(CreateTituloDto) {}
