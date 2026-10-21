import {
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateProfessorDto {
  @IsInt()
  @IsNotEmpty()
  id_titulo: number;

  @IsString()
  @IsNotEmpty()
  tx_nome: string;

  @IsString()
  @IsIn(['m', 'f'])
  @IsNotEmpty()
  tx_sexo: string;

  @IsString()
  @IsIn(['s', 'c', 'd'])
  @IsNotEmpty()
  tx_estado_civil: string;

  @IsDateString()
  @IsNotEmpty()
  dt_nascimento: string;

  @IsString()
  @IsNotEmpty()
  tx_telefone: string;
}
