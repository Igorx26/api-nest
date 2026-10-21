import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateInstituicaoDto {
  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  tx_sigla: string;

  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  tx_descricao: string;
}
