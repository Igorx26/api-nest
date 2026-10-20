import { IsNotEmpty, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateDisciplinaDto {
  @IsInt()
  @IsOptional()
  id_curso?: number;

  @IsInt()
  @IsNotEmpty()
  id_tipo_disciplina: number;

  @IsString()
  @IsNotEmpty()
  tx_sigla: string;

  @IsString()
  @IsNotEmpty()
  tx_descricao: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  in_periodo: number;

  @IsInt()
  @Min(40)
  @IsNotEmpty()
  in_carga_horaria: number;
}
