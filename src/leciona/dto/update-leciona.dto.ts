import { PartialType } from '@nestjs/mapped-types';
import { CreateLecionaDto } from './create-leciona.dto.js';

export class UpdateLecionaDto extends PartialType(CreateLecionaDto) {}
