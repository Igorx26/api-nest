import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCursoDto {
  @IsInt()
  @IsNotEmpty()
  id_instituicao: number;

  @IsInt()
  @IsNotEmpty()
  id_tipo_curso: number;

  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  tx_descricao: string;
}
