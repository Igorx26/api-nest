import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTipoDisciplinaDto {
  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  tx_descricao: string;
}
