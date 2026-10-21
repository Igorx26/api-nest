import {
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Age } from '../../common/validators/age.validator.js';
import { Type } from 'class-transformer';

export class CreateProfessorDto {
  @IsInt()
  @IsNotEmpty()
  id_titulo: number;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  tx_nome: string;

  @IsString()
  @IsIn(['m', 'f'])
  @IsOptional()
  tx_sexo?: string;

  @IsString()
  @IsIn(['s', 'c', 'd'])
  @IsOptional()
  tx_estado_civil?: string;

  @Type(() => Date)
  @Age(10)
  @IsNotEmpty()
  dt_nascimento: Date;

  @IsString()
  @MaxLength(13)
  @IsNotEmpty()
  tx_telefone: string;
}
