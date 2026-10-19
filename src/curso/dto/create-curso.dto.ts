import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCursoDto {
  @IsInt()
  @IsNotEmpty()
  id_instituicao: number;

  @IsInt()
  @IsNotEmpty()
  id_tipo_curso: number;

  @IsString()
  @IsNotEmpty()
  tx_descricao: string;
}
