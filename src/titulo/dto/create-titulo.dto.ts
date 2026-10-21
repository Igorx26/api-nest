import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTituloDto {
  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  tx_descricao: string;
}
