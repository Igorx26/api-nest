import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoDisciplinaDto {
  @IsString()
  @IsNotEmpty()
  tx_descricao: string;
}
