import { PartialType } from '@nestjs/mapped-types';
import { CreateCursaDto } from './create-cursa.dto.js';

export class UpdateCursaDto extends PartialType(CreateCursaDto) {}
