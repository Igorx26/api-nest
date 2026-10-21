import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoCursoDto {
  @IsString()
  @IsNotEmpty()
  tx_descricao: string;
}
