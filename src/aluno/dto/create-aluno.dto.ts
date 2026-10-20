import { IsDateString, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty()
  tx_nome: string;

  @IsString()
  @IsIn(['m', 'f'])
  @IsNotEmpty()
  tx_sexo: string;

  @IsDateString()
  @IsNotEmpty()
  dt_nascimento: string;
}
