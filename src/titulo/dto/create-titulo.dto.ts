import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTituloDto {
  @IsString()
  @IsNotEmpty()
  tx_descricao: string;
}
